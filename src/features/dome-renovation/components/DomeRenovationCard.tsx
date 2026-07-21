import { cn } from '@/shared/lib/cn'

import type { DomeRenovationCardData } from '../constants/cards'

import { DomeRenovationConnector } from './DomeRenovationConnector'

interface DomeRenovationCardProps {
  card: DomeRenovationCardData
  className?: string
  size?: 'default' | 'large'
  connectorDirection?: 'left' | 'right'
}

const IMAGE_FRAME = {
  default:
    'flex h-[280px] w-full items-center justify-start min-[1200px]:h-[320px]',
  large:
    'flex h-[320px] w-full items-center justify-start min-[861px]:h-[340px] min-[1200px]:h-[380px]',
} as const

const IMAGE_WIDTH = {
  default: 'w-full max-w-[420px] min-[1200px]:max-w-[460px]',
  large: 'w-full max-w-[500px] min-[861px]:max-w-[540px] min-[1200px]:max-w-[620px]',
} as const

const IMAGE_CLASS =
  'h-full w-full max-w-full object-contain object-left'

function CardImage({
  card,
  size,
}: {
  card: DomeRenovationCardData
  size: 'default' | 'large'
}) {
  return (
    <div className={IMAGE_FRAME[size]}>
      <img
        alt={card.imageAlt}
        className={IMAGE_CLASS}
        loading="lazy"
        src={card.imageSrc}
      />
    </div>
  )
}

export function DomeRenovationCard({
  card,
  className,
  size = 'default',
  connectorDirection,
}: DomeRenovationCardProps) {
  const title = (
    <h3 className="type-subheading font-normal text-accent-alt">
      <span className="text-accent">[ + ]</span> {card.title}
    </h3>
  )

  if (connectorDirection === 'left') {
    return (
      <div className={cn('flex w-full flex-col gap-3', className)}>
        {title}
        <div className="flex min-w-0 items-center gap-3">
          <div className={cn('shrink-0', IMAGE_WIDTH[size])}>
            <CardImage card={card} size={size} />
          </div>
          <DomeRenovationConnector
            className="min-w-0 flex-1 self-center"
            direction="left"
          />
        </div>
      </div>
    )
  }

  if (connectorDirection === 'right') {
    return (
      <div className={cn('flex w-full flex-col gap-3', className)}>
        <div className="flex min-w-0 items-start gap-3">
          <div aria-hidden="true" className="min-w-0 flex-1" />
          <div className={cn('shrink-0', IMAGE_WIDTH[size])}>{title}</div>
        </div>
        <div className="flex min-w-0 items-center gap-3">
          <DomeRenovationConnector
            className="min-w-0 flex-1 self-center"
            direction="right"
          />
          <div className={cn('shrink-0', IMAGE_WIDTH[size])}>
            <CardImage card={card} size={size} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className={cn('flex w-full flex-col', IMAGE_WIDTH[size], className)}>
      {title}
      <div className={cn(IMAGE_FRAME[size], 'mt-3')}>
        <img
          alt={card.imageAlt}
          className={IMAGE_CLASS}
          loading="lazy"
          src={card.imageSrc}
        />
      </div>
    </article>
  )
}
