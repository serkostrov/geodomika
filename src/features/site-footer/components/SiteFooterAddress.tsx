import {
  SITE_FOOTER_ADDRESS_LABEL,
  SITE_FOOTER_ADDRESS_LINES,
} from '../constants/content'

export function SiteFooterAddress() {
  return (
    <div>
      <p className="type-label space-stack-label text-muted-foreground">
        {SITE_FOOTER_ADDRESS_LABEL}
      </p>

      <address className="type-body not-italic text-white">
        {SITE_FOOTER_ADDRESS_LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </div>
  )
}
