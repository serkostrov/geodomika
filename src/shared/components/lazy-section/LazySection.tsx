import {
  type ComponentType,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface LazySectionProps {
  id?: string
  loader: () => Promise<{ default: ComponentType }>
  /** Placeholder height while the section is off-screen */
  minHeightClassName?: string
  rootMargin?: string
  fallback?: ReactNode
}

export function LazySection({
  id,
  loader,
  minHeightClassName = 'min-h-[50vh]',
  rootMargin = '400px 0px',
  fallback,
}: LazySectionProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [Section, setSection] = useState<ComponentType | null>(null)
  const [failed, setFailed] = useState(false)
  const loadStartedRef = useRef(false)

  const load = useCallback(() => {
    if (loadStartedRef.current) return
    loadStartedRef.current = true

    void loader()
      .then((module) => {
        setSection(() => module.default)
      })
      .catch(() => {
        loadStartedRef.current = false
        setFailed(true)
      })
  }, [loader])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        load()
      },
      { rootMargin },
    )

    observer.observe(host)

    return () => {
      observer.disconnect()
    }
  }, [load, rootMargin])

  useEffect(() => {
    if (!id) return

    const syncFromHash = () => {
      if (window.location.hash === `#${id}`) {
        load()
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [id, load])

  useEffect(() => {
    if (!Section || !id) return
    if (window.location.hash !== `#${id}`) return

    const frame = requestAnimationFrame(() => {
      hostRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(frame)
  }, [Section, id])

  return (
    <div id={id} ref={hostRef}>
      {Section ? (
        <Section />
      ) : failed ? null : (
        (fallback ?? <div aria-hidden="true" className={minHeightClassName} />)
      )}
    </div>
  )
}
