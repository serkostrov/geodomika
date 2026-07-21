import {
  DOME_RENOVATION_INTERIOR_CARD,
  DOME_RENOVATION_LEFT_CARDS,
} from '../constants/cards'

import { DomeRenovationCard } from './DomeRenovationCard'
import { DomeRenovationConnector } from './DomeRenovationConnector'
import { DomeRenovationCta } from './DomeRenovationCta'
import { DomeRenovationMobileFlow } from './DomeRenovationMobileFlow'

export function DomeRenovationFlow() {
  const [tentCard, comfortCard] = DOME_RENOVATION_LEFT_CARDS

  return (
    <div
      className="relative min-[861px]:h-[820px] min-[1200px]:h-[860px] [--dome-renovation-axis:45%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 hidden h-full w-px -translate-x-1/2 bg-border-muted min-[861px]:block min-[861px]:left-[var(--dome-renovation-axis)]"
      />

      <DomeRenovationMobileFlow />

      <div className="hidden min-[861px]:block">
        <div className="absolute left-0 top-6 z-10 w-[var(--dome-renovation-axis)] min-[1200px]:top-8">
          <DomeRenovationCard
            card={tentCard}
            className="shrink-0"
            connectorDirection="left"
          />
        </div>

        <div className="absolute left-[var(--dome-renovation-axis)] top-[220px] z-10 w-[calc(100%-var(--dome-renovation-axis))] min-[1200px]:top-[240px]">
          <DomeRenovationCard
            card={DOME_RENOVATION_INTERIOR_CARD}
            className="shrink-0"
            connectorDirection="right"
            size="large"
          />
        </div>

        <div className="absolute left-0 top-[420px] z-10 w-[var(--dome-renovation-axis)] min-[1200px]:top-[440px]">
          <DomeRenovationCard
            card={comfortCard}
            className="shrink-0"
            connectorDirection="left"
          />
        </div>

        <div className="absolute left-[var(--dome-renovation-axis)] top-[680px] z-10 flex w-[calc(100%-var(--dome-renovation-axis))] items-center gap-10 min-[1200px]:top-[700px] min-[1200px]:gap-12">
          <DomeRenovationConnector className="min-w-0 flex-1" direction="right" />
          <DomeRenovationCta />
        </div>
      </div>
    </div>
  )
}
