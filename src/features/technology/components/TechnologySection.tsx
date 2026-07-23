import { Container } from '@/shared/components/layout/container'
import { Accordion } from '@/shared/components/ui/accordion'

import { TECHNOLOGY_ACCORDION_ITEMS } from '../constants/accordion-items'

import { TechnologyStructure } from './TechnologyStructure'

export function TechnologySection() {
  return (
    <section
      className="space-section-y relative overflow-hidden bg-surface-warm text-accent-alt"
    >
      <Container className="relative">
        <header className="space-header">
          <p className="type-body space-stack-label text-accent-alt">
            <span>[ + ]</span> технология ГЕОДОМИКА
          </p>

          <h2 className="type-heading uppercase">
            <span className="block text-accent-2">КУПОЛА ГЕОДОМИКА —</span>
            <span className="block">ПРОЧНЫЕ И ТЁПЛЫЕ</span>
          </h2>
        </header>

        <div className="space-cols grid grid-cols-1 items-start min-[861px]:grid-cols-2">
          <TechnologyStructure />
          <Accordion
            defaultOpenId="technology-difference"
            items={TECHNOLOGY_ACCORDION_ITEMS}
          />
        </div>
      </Container>
    </section>
  )
}
