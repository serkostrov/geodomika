import blobIcon from '@/assets/icons/technology/blob.svg'
import { Container } from '@/shared/components/layout/container'
import { Accordion } from '@/shared/components/ui/accordion'

import { TECHNOLOGY_ACCORDION_ITEMS } from '../constants/accordion-items'

import { TechnologyStructure } from './TechnologyStructure'

export function TechnologySection() {
  return (
    <section
      className="space-section-y relative overflow-hidden bg-surface-warm text-accent-alt"
      id="technology"
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[20px] right-4 w-[120px] select-none min-[721px]:top-[30px] min-[721px]:right-6 min-[721px]:w-[200px] min-[1200px]:top-[70px] min-[1200px]:right-[110px] min-[1200px]:w-[320px]"
        height={94}
        src={blobIcon}
        width={250}
      />

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
