import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'

import { cn } from '@/shared/lib/cn'

const CONNECTOR_SLOT_CLASS = 'w-[52px] shrink-0'

function MobileTimelineConnector() {
  return (
    <div
      aria-hidden="true"
      className={cn('flex h-8 items-center', CONNECTOR_SLOT_CLASS)}
    >
      <span className="h-px w-7 shrink-0 border-t border-dashed border-border-muted" />
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-[4px] border border-accent/25 bg-surface-warm">
        <img
          alt=""
          aria-hidden="true"
          className="h-3.5 w-4"
          height={14}
          src={arrowRightIcon}
          width={16}
        />
      </span>
    </div>
  )
}

interface DomeRenovationMobileStepProps {
  title: string
  imageSrc: string
  imageAlt: string
  isFirst?: boolean
  /** Заголовок только над колонкой фото (2-й блок) */
  titleAboveImage?: boolean
}

const MOBILE_IMAGE_FRAME =
  'flex h-[210px] min-w-0 flex-1 items-center justify-start min-[481px]:h-[240px]'

export function DomeRenovationMobileStep({
  title,
  imageSrc,
  imageAlt,
  isFirst = false,
  titleAboveImage = false,
}: DomeRenovationMobileStepProps) {
  const heading = (
    <h3 className="type-subheading pr-2 font-normal text-accent-alt">
      <span className="text-accent">[ + ]</span> {title}
    </h3>
  )

  return (
    <article className={cn('pb-8 last:pb-6', isFirst && 'pt-6 min-[1200px]:pt-8')}>
      {titleAboveImage ? (
        <div className="flex pl-3">
          <div aria-hidden="true" className={CONNECTOR_SLOT_CLASS} />
          <div className="min-w-0 flex-1">{heading}</div>
        </div>
      ) : (
        <div className="pl-10">{heading}</div>
      )}

      <div className="mt-3 flex items-center pl-3">
        <MobileTimelineConnector />
        <div className={MOBILE_IMAGE_FRAME}>
          <img
            alt={imageAlt}
            className="h-full w-full max-w-full object-contain object-left"
            loading="lazy"
            src={imageSrc}
          />
        </div>
      </div>
    </article>
  )
}
