import { Container } from '@/shared/components/layout/container'

import { DOMES_COMPACT_CARDS } from '../constants/cards'

import { DomesCompactCard } from './DomesCompactCard'
import { DomesLandscapeBlock } from './DomesLandscapeBlock'
import { DomesQuote } from './DomesQuote'

export function DomesSection() {
  const [skyEffectCard, profitabilityCard] = DOMES_COMPACT_CARDS

  return (
    <section
      className="space-section-y relative overflow-hidden bg-surface text-accent-alt"
    >
      <Container className="relative z-10 grid gap-10 min-[721px]:gap-12 min-[1200px]:gap-16">
        <DomesQuote />

        <div className="grid grid-cols-1 gap-8 min-[861px]:grid-cols-2 min-[861px]:items-end min-[861px]:gap-5 min-[1200px]:gap-6">
          <div className="order-2 grid grid-cols-1 gap-5 min-[481px]:grid-cols-2 min-[861px]:order-1 min-[861px]:gap-5 min-[1200px]:gap-6">
            <DomesCompactCard card={skyEffectCard} />
            <DomesCompactCard card={profitabilityCard} />
          </div>

          <DomesLandscapeBlock className="order-1 min-[861px]:order-2" />
        </div>
      </Container>
    </section>
  )
}
