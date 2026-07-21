import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

interface HeroSocialButtonProps {
  href: string
  label: string
  children: ReactNode
  className?: string
}

export function HeroSocialButton({
  href,
  label,
  children,
  className,
}: HeroSocialButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      aria-label={label}
      className={cn(
        'flex size-[42px] items-center justify-center rounded-[5px] bg-accent text-icon-cream transition-colors hover:bg-accent-hover max-[720px]:size-10',
        className,
      )}
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}
