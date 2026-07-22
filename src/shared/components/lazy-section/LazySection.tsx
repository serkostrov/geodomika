import {
  type ComponentType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

interface LazySectionProps {
  loader: () => Promise<{ default: ComponentType }>
  /** Placeholder height while the section is off-screen */
  minHeightClassName?: string
  rootMargin?: string
  fallback?: ReactNode
}

export function LazySection({
  loader,
  minHeightClassName = 'min-h-[50vh]',
  rootMargin = '400px 0px',
  fallback,
}: LazySectionProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [Section, setSection] = useState<ComponentType | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let cancelled = false

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return

        observer.disconnect()

        void loader()
          .then((module) => {
            if (!cancelled) setSection(() => module.default)
          })
          .catch(() => {
            if (!cancelled) setFailed(true)
          })
      },
      { rootMargin },
    )

    observer.observe(host)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [loader, rootMargin])

  return (
    <div ref={hostRef}>
      {Section ? (
        <Section />
      ) : failed ? null : (
        (fallback ?? <div aria-hidden="true" className={minHeightClassName} />)
      )}
    </div>
  )
}
