import backgroundPattern from '@/assets/images/who-suits/background-pattern.png'
import { Container } from '@/shared/components/layout/container'

import { WHO_SUITS_INTRO } from '../constants/content'
import { WHO_SUITS_ROWS } from '../constants/rows'

import { WhoSuitsHeader } from './WhoSuitsHeader'
import { WhoSuitsRow } from './WhoSuitsRow'

export function WhoSuitsSection() {
  return (
    <section
      className="space-section-y relative overflow-hidden bg-surface text-accent-alt"
      id="who-suits"
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 select-none"
        height={643}
        src={backgroundPattern}
        width={1024}
      />

      <Container className="relative z-10">
        <WhoSuitsHeader />

        <div className="border-t border-border-muted">
          {WHO_SUITS_ROWS.map((row, index) => (
            <WhoSuitsRow
              key={row.id}
              introText={WHO_SUITS_INTRO}
              row={row}
              showIntro={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
