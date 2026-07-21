import heroBackground from '@/assets/images/hero-background.png'
import { Container } from '@/shared/components/layout/container'

import { HeroContent } from './HeroContent'
import { HeroHeader } from './HeroHeader'

export function HeroSection() {
  return (
    <section className="relative flex h-svh overflow-hidden bg-accent-alt">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-[72%_center] min-[721px]:object-center"
        src={heroBackground}
      />

      <div aria-hidden="true" className="hero-overlay pointer-events-none absolute inset-0" />

      <div
        aria-hidden="true"
        className="hero-header-blur pointer-events-none absolute inset-x-0 top-0 z-[1] h-[320px] min-[721px]:h-[400px] min-[1200px]:h-[480px]"
      />

      <Container className="space-hero-y relative z-10 flex h-full min-h-0 flex-col">
        <HeroHeader />
        <HeroContent />
      </Container>
    </section>
  )
}
