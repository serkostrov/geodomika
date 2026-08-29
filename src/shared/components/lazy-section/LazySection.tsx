import { type ReactNode, Suspense } from 'react'

interface LazySectionProps {
  id?: string
  children: ReactNode
  minHeightClassName?: string
  fallback?: ReactNode
}

export function LazySection({
  id,
  children,
  minHeightClassName = 'min-h-[50vh]',
  fallback,
}: LazySectionProps) {
  return (
    <div id={id}>
      <Suspense
        fallback={fallback ?? <div aria-hidden="true" className={minHeightClassName} />}
      >
        {children}
      </Suspense>
    </div>
  )
}
