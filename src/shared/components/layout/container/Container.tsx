import type { ElementType, ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-container px-5 min-[481px]:px-6 min-[721px]:px-8',
        className,
      )}
    >
      {children}
    </Component>
  )
}
