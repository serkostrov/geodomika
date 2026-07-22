import testNightBackground from '@/assets/images/test-night/background-test-form.webp'
import { Container } from '@/shared/components/layout/container'

import { TestNightCard } from './TestNightCard'

export function TestNightSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-accent-alt">
      <div className="space-section-photo relative mx-auto flex w-full">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          height={900}
          loading="lazy"
          src={testNightBackground}
          width={1600}
        />

        <div
          aria-hidden="true"
          className="test-night-overlay pointer-events-none absolute inset-0"
        />

        <div
          aria-hidden="true"
          className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        />

        <Container className="space-section-y-media relative z-10 flex h-full w-full items-end min-[721px]:items-center">
          <TestNightCard />
        </Container>
      </div>
    </section>
  )
}
