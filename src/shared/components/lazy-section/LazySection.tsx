import {
  type ComponentType,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { registerSectionLoader } from '@/shared/lib/section-scroll'

interface LazySectionProps {
  id?: string
  loader: () => Promise<{ default: ComponentType }>
  /** Placeholder height while the section is off-screen */
  minHeightClassName?: string
  rootMargin?: string
  fallback?: ReactNode
}

let anonymousLoaderKey = 0

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
  const sectionRef = useRef<ComponentType | null>(null)
  const loadPromiseRef = useRef<Promise<void> | null>(null)
  const resolveLoadRef = useRef<(() => void) | null>(null)
  const registryKeyRef = useRef(id ?? `__lazy-${String((anonymousLoaderKey += 1))}`)

  sectionRef.current = Section

  const ensureLoaded = useCallback((): Promise<void> => {
    if (sectionRef.current) return Promise.resolve()
    if (loadPromiseRef.current) return loadPromiseRef.current

    loadPromiseRef.current = new Promise<void>((resolve, reject) => {
      resolveLoadRef.current = resolve

      void loader()
        .then((module) => {
          setSection(() => module.default)
        })
        .catch((error: unknown) => {
          loadPromiseRef.current = null
          resolveLoadRef.current = null
          setFailed(true)
          reject(error)
        })
    })

    return loadPromiseRef.current
  }, [loader])

  useEffect(() => {
    if (!Section) return
    resolveLoadRef.current?.()
    resolveLoadRef.current = null
  }, [Section])

  useEffect(() => {
    return registerSectionLoader(registryKeyRef.current, ensureLoaded)
  }, [ensureLoaded])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        void ensureLoaded()
      },
      { rootMargin },
    )

    observer.observe(host)

    return () => {
      observer.disconnect()
    }
  }, [ensureLoaded, rootMargin])

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
