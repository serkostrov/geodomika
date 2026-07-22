import winterBackground from '@/assets/images/winter-season/background-winter.webp'
import { Container } from '@/shared/components/layout/container'

import { WinterSeasonCard } from './WinterSeasonCard'

export function WinterSeasonSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-accent-alt">
      <div className="space-section-photo relative mx-auto w-full">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-[68%_center] min-[861px]:object-[72%_center]"
          decoding="async"
          height={480}
          loading="lazy"
          src={winterBackground}
          width={1024}
        />

        <div
          aria-hidden="true"
          className="winter-season-overlay pointer-events-none absolute inset-0"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        />

        <Container className="space-section-y-media relative z-10 flex h-full items-end min-[721px]:items-center">
          <WinterSeasonCard />
        </Container>
      </div>
    </section>
  )
}
