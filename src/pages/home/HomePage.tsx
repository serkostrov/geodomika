import { lazy, useEffect } from 'react'

import { HeroSection } from '@/features/hero'
import { LazySection } from '@/shared/components/lazy-section'
import { navigateToSection } from '@/shared/lib/section-scroll'

const TechnologySection = lazy(() =>
  import('@/features/technology').then((module) => ({
    default: module.TechnologySection,
  })),
)
const GuestExperienceSection = lazy(() =>
  import('@/features/guest-experience').then((module) => ({
    default: module.GuestExperienceSection,
  })),
)
const DomesSection = lazy(() =>
  import('@/features/domes').then((module) => ({
    default: module.DomesSection,
  })),
)
const AdvantagesSection = lazy(() =>
  import('@/features/advantages').then((module) => ({
    default: module.AdvantagesSection,
  })),
)
const TestNightSection = lazy(() =>
  import('@/features/test-night').then((module) => ({
    default: module.TestNightSection,
  })),
)
const WhoSuitsSection = lazy(() =>
  import('@/features/who-suits').then((module) => ({
    default: module.WhoSuitsSection,
  })),
)
const ModelsPricingSection = lazy(() =>
  import('@/features/models-pricing').then((module) => ({
    default: module.ModelsPricingSection,
  })),
)
const OrderFormatsSection = lazy(() =>
  import('@/features/order-formats').then((module) => ({
    default: module.OrderFormatsSection,
  })),
)
const WinterSeasonSection = lazy(() =>
  import('@/features/winter-season').then((module) => ({
    default: module.WinterSeasonSection,
  })),
)
const DomeRenovationSection = lazy(() =>
  import('@/features/dome-renovation').then((module) => ({
    default: module.DomeRenovationSection,
  })),
)
const FaqSection = lazy(() =>
  import('@/features/faq').then((module) => ({
    default: module.FaqSection,
  })),
)
const SiteFooterSection = lazy(() =>
  import('@/features/site-footer').then((module) => ({
    default: module.SiteFooterSection,
  })),
)

export function HomePage() {
  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash) {
        void navigateToSection(window.location.hash)
      }
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  return (
    <main className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <LazySection id="technology" minHeightClassName="min-h-[70vh]">
        <TechnologySection />
      </LazySection>
      <LazySection id="facts" minHeightClassName="min-h-[70vh]">
        <GuestExperienceSection />
      </LazySection>
      <LazySection id="domes" minHeightClassName="min-h-[80vh]">
        <DomesSection />
      </LazySection>
      <LazySection id="advantages" minHeightClassName="min-h-[60vh]">
        <AdvantagesSection />
      </LazySection>
      <LazySection minHeightClassName="min-h-[70vh]">
        <TestNightSection />
      </LazySection>
      <LazySection id="who-suits" minHeightClassName="min-h-[50vh]">
        <WhoSuitsSection />
      </LazySection>
      <LazySection id="models-pricing" minHeightClassName="min-h-[90vh]">
        <ModelsPricingSection />
      </LazySection>
      <LazySection id="order-formats" minHeightClassName="min-h-[70vh]">
        <OrderFormatsSection />
      </LazySection>
      <LazySection minHeightClassName="min-h-[70vh]">
        <WinterSeasonSection />
      </LazySection>
      <LazySection id="dome-renovation" minHeightClassName="min-h-[70vh]">
        <DomeRenovationSection />
      </LazySection>
      <LazySection id="faq" minHeightClassName="min-h-[40vh]">
        <FaqSection />
      </LazySection>
      <LazySection minHeightClassName="min-h-[40vh]">
        <SiteFooterSection />
      </LazySection>
    </main>
  )
}
