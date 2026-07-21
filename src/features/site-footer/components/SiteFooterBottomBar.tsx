import {
  SITE_FOOTER_COPYRIGHT,
  SITE_FOOTER_CREDITS_HREF,
  SITE_FOOTER_CREDITS_LABEL,
  SITE_FOOTER_PRIVACY_HREF,
  SITE_FOOTER_PRIVACY_LABEL,
} from '../constants/content'

export function SiteFooterBottomBar() {
  return (
    <div className="type-caption mt-16 grid gap-4 text-muted-foreground min-[721px]:grid-cols-[1fr_auto_1fr] min-[721px]:items-center min-[721px]:gap-6 min-[1200px]:mt-20">
      <p className="min-[721px]:justify-self-start">{SITE_FOOTER_COPYRIGHT}</p>

      <a
        className="transition-colors hover:text-white/80 min-[721px]:justify-self-center"
        href={SITE_FOOTER_PRIVACY_HREF}
      >
        {SITE_FOOTER_PRIVACY_LABEL}
      </a>

      <a
        className="transition-colors hover:text-white/80 min-[721px]:justify-self-end"
        href={SITE_FOOTER_CREDITS_HREF}
      >
        {SITE_FOOTER_CREDITS_LABEL}
      </a>
    </div>
  )
}
