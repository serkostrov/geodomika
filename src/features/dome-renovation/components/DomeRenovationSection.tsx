import { Container } from '@/shared/components/layout/container'

import { DomeRenovationFlow } from './DomeRenovationFlow'
import { DomeRenovationHeader } from './DomeRenovationHeader'

export function DomeRenovationSection() {
  return (
    <section
      className="space-section-y bg-surface-warm text-accent-alt"
      id="dome-renovation"
    >
      <Container className="min-[861px]:px-16">
        <DomeRenovationHeader />
        <div className="min-[861px]:border-t min-[861px]:border-border-muted">
          <DomeRenovationFlow />
        </div>
      </Container>
    </section>
  )
}
