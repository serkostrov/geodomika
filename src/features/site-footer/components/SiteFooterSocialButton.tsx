import { cn } from '@/shared/lib/cn'

interface SiteFooterSocialButtonProps {
  href: string
  label: string
  iconSrc: string
  className?: string
}

export function SiteFooterSocialButton({
  href,
  label,
  iconSrc,
  className,
}: SiteFooterSocialButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      className={cn(
        'inline-flex h-[34px] items-center gap-2 rounded-[5px] bg-accent px-4 type-button text-icon-cream transition-colors hover:bg-accent-hover',
        className,
      )}
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      <img
        alt=""
        aria-hidden="true"
        className="size-[16px] shrink-0 object-contain"
        height={16}
        src={iconSrc}
        width={16}
      />
      <span>{label}</span>
    </a>
  )
}
