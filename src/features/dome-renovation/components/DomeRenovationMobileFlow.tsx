import {
  DOME_RENOVATION_INTERIOR_CARD,
  DOME_RENOVATION_LEFT_CARDS,
} from '../constants/cards'

import { cn } from '@/shared/lib/cn'

import { DomeRenovationCta } from './DomeRenovationCta'
import { DomeRenovationMobileStep } from './DomeRenovationMobileStep'

/** Позиция вертикальной оси на мобилке (совпадает с pl коннектора) */
export const MOBILE_TIMELINE_LEFT_CLASS = 'left-3'

export function DomeRenovationMobileFlow() {
  const [tentCard, comfortCard] = DOME_RENOVATION_LEFT_CARDS

  const steps = [tentCard, DOME_RENOVATION_INTERIOR_CARD, comfortCard]

  return (
    <div className="relative min-[861px]:hidden">
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 right-0 h-px bg-border-muted',
          MOBILE_TIMELINE_LEFT_CLASS,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-36 top-0 w-px bg-border-muted',
          MOBILE_TIMELINE_LEFT_CLASS,
        )}
      />

      {steps.map((step, index) => (
        <DomeRenovationMobileStep
          key={step.id}
          imageAlt={step.imageAlt}
          imageSrc={step.imageSrc}
          isFirst={index === 0}
          title={step.title}
          titleAboveImage={index === 1}
        />
      ))}

      <div className="pt-2">
        <DomeRenovationCta variant="mobile" />
      </div>
    </div>
  )
}
