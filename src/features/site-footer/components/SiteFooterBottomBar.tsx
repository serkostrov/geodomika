import { Link } from 'react-router-dom'

import {
  SITE_FOOTER_COPYRIGHT,
  SITE_FOOTER_CREDITS_HREF,
  SITE_FOOTER_CREDITS_LABEL,
} from '../constants/content'

import { LEGAL_DOCUMENTS } from '@/shared/constants/legal-routes'

export function SiteFooterBottomBar() {
  return (
    <div className="type-caption mt-16 grid gap-4 text-muted-foreground min-[721px]:grid-cols-[1fr_auto_1fr] min-[721px]:items-center min-[721px]:gap-6 min-[1200px]:mt-20">
      <p className="min-[721px]:justify-self-start">{SITE_FOOTER_COPYRIGHT}</p>

      <nav
        aria-label="Юридические документы"
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 min-[721px]:justify-self-center"
      >
        {LEGAL_DOCUMENTS.map((document, index) => (
          <span key={document.path} className="inline-flex items-center gap-3">
            {index > 0 ? <span aria-hidden="true">·</span> : null}
            <Link
              className="transition-colors hover:text-white/80"
              to={document.path}
            >
              {document.shortLabel}
            </Link>
          </span>
        ))}
      </nav>

      <a
        className="transition-colors hover:text-white/80 min-[721px]:justify-self-end"
        href={SITE_FOOTER_CREDITS_HREF}
      >
        {SITE_FOOTER_CREDITS_LABEL}
      </a>
    </div>
  )
}
