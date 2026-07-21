import { TEST_NIGHT_CONTACT_TEXT_LINES } from '../constants/content'
import { TEST_NIGHT_SOCIAL_LINKS } from '../constants/social-links'

export function TestNightSocialRow() {
  return (
    <div className="mt-8 flex flex-row items-center gap-3 min-[481px]:mt-10 min-[481px]:gap-4">
      <div className="flex shrink-0 gap-2">
        {TEST_NIGHT_SOCIAL_LINKS.map((social) => {
          const isExternal = social.href.startsWith('http')

          return (
          <a
            key={social.label}
            aria-label={social.label}
            className="flex size-[40px] items-center justify-center rounded-[5px] bg-accent text-icon-cream transition-colors hover:bg-accent-hover"
            href={social.href}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            target={isExternal ? '_blank' : undefined}
          >
            <img
              alt=""
              aria-hidden="true"
              className="size-[18px] object-contain"
              height={18}
              src={social.iconSrc}
              width={18}
            />
          </a>
          )
        })}
      </div>

      <p className="type-caption min-w-0 text-white/80">
        {TEST_NIGHT_CONTACT_TEXT_LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}
