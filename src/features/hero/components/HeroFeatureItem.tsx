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
    <li className={cn('min-w-0 min-[721px]:max-w-[220px]', className)}>
      <div className="mb-2 block min-[721px]:mb-3">{icon}</div>
      <p className="whitespace-nowrap font-normal leading-[1.35] text-white text-[clamp(10px,2.9vw,13px)] min-[1200px]:text-[15px]">
        {children}
      </p>
    </li>
  )
}
