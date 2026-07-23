import {
  SITE_FOOTER_CONTACTS_LABEL,
  SITE_FOOTER_EMAIL,
  SITE_FOOTER_EMAIL_HREF,
  SITE_FOOTER_SECTIONS_LABEL,
} from '../constants/content'
import { SITE_FOOTER_NAV_LINKS } from '../constants/navigation'
import { SITE_FOOTER_SOCIAL_LINKS } from '../constants/social-links'
import { CONTACT_PHONES } from '@/shared/constants/contacts'
import { handleSectionLinkClick } from '@/shared/lib/section-scroll'

import { SiteFooterSocialButton } from './SiteFooterSocialButton'

export function SiteFooterContacts() {
  return (
    <div>
      <p className="type-label space-stack-label text-muted-foreground">
        {SITE_FOOTER_CONTACTS_LABEL}
      </p>

      <div className="grid gap-1">
        {CONTACT_PHONES.map((phone) => (
          <a
            key={phone.href}
            className="type-title block text-white transition-colors hover:text-white/85"
            href={phone.href}
          >
            {phone.display}
          </a>
        ))}
      </div>

      <a
        className="type-body mt-1 block text-white transition-colors hover:text-white/85"
        href={SITE_FOOTER_EMAIL_HREF}
      >
        {SITE_FOOTER_EMAIL}
      </a>

      <div className="mt-4 flex flex-wrap gap-2">
        {SITE_FOOTER_SOCIAL_LINKS.map((social) => (
          <SiteFooterSocialButton
            key={social.label}
            href={social.href}
            iconSrc={social.iconSrc}
            label={social.label}
          />
        ))}
      </div>

      <div className="space-cta">
        <p className="type-label space-stack-label text-muted-foreground">
          {SITE_FOOTER_SECTIONS_LABEL}
        </p>

        <nav aria-label="Разделы сайта">
          <ul className="grid gap-1">
            {SITE_FOOTER_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="type-body text-white transition-colors hover:text-white/80"
                  href={link.href}
                  onClick={handleSectionLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
