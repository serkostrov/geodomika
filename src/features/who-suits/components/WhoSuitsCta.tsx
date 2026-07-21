import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'

import { WHO_SUITS_CTA_HREF, WHO_SUITS_CTA_LABEL } from '../constants/content'

export function WhoSuitsCta() {
  return (
    <div className="flex items-center gap-2">
      <a
        className="inline-flex h-[43px] items-center justify-center rounded-[5px] bg-accent px-6 type-button text-white transition-colors hover:bg-accent-hover min-[481px]:h-[50px] min-[481px]:px-8"
        href={WHO_SUITS_CTA_HREF}
      >
        {WHO_SUITS_CTA_LABEL}
      </a>
      <a
        aria-label={WHO_SUITS_CTA_LABEL}
        className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-accent text-white transition-colors hover:bg-accent-hover min-[481px]:size-[50px]"
        href={WHO_SUITS_CTA_HREF}
      >
        <img
          alt=""
          aria-hidden="true"
          className="h-3.5 w-4 brightness-0 invert"
          height={14}
          src={arrowRightIcon}
          width={16}
        />
      </a>
    </div>
  )
}
