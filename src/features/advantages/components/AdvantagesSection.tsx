import sectionBackground from '@/assets/images/advantages/background-vip-obj.webp'
import { Container } from '@/shared/components/layout/container'

import { AdvantagesGrid } from './AdvantagesGrid'
import { AdvantagesIntro } from './AdvantagesIntro'

export function AdvantagesSection() {
  return (
    <section
      className="space-section-y relative overflow-hidden bg-surface text-accent-alt"
      id="advantages"
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 select-none"
        decoding="async"
        height={1075}
        loading="lazy"
        src={sectionBackground}
        width={1600}
      />

      <Container className="space-cols relative z-10 grid grid-cols-1 items-start min-[861px]:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <AdvantagesIntro />
        <AdvantagesGrid />
      </Container>
    </section>
  )
}
