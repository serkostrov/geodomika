import { Container } from '@/shared/components/layout/container'

import { FaqAccordion } from './FaqAccordion'
import { FaqCta } from './FaqCta'
import { FaqHeader } from './FaqHeader'

export function FaqSection() {
  return (
    <section
      className="space-section-y bg-surface text-accent-alt"
      id="faq"
    >
      <Container>
        <FaqHeader />
        <FaqAccordion />
        <FaqCta />
      </Container>
    </section>
  )
}
