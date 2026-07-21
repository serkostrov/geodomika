import {
  SITE_FOOTER_DESCRIPTION,
  SITE_FOOTER_HEADLINE_LINES,
  SITE_FOOTER_LEGAL_LABEL,
  SITE_FOOTER_LEGAL_LINES,
} from '../constants/content'

export function SiteFooterBrand() {
  return (
    <div className="flex min-h-full flex-col">
      <div>
        <h2 className="type-heading space-stack-title max-w-[700px] uppercase text-white">
          {SITE_FOOTER_HEADLINE_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="type-body max-w-[250px] text-surface">
          {SITE_FOOTER_DESCRIPTION}
        </p>
      </div>

      <div className="type-caption mt-12 text-surface/70 min-[1200px]:mt-auto min-[1200px]:pt-16">
        <p>
          {SITE_FOOTER_LEGAL_LABEL}
        </p>
        <ul className="mt-2 grid gap-1">
          {SITE_FOOTER_LEGAL_LINES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
