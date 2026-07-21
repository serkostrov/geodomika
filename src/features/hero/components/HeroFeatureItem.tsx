import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

interface HeroFeatureItemProps {
  icon: ReactNode
  children: ReactNode
  className?: string
}

export function HeroFeatureItem({
  icon,
  children,
  className,
}: HeroFeatureItemProps) {
  return (
    <li className={cn('min-w-0 flex-1 min-[721px]:max-w-[240px]', className)}>
      <div className="mb-2 block min-[721px]:mb-3">{icon}</div>
      <p className="type-body text-white">{children}</p>
    </li>
  )
}
