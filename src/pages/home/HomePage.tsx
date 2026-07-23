import { useCallback } from 'react'

import { HeroSection } from '@/features/hero'
import { LazySection } from '@/shared/components/lazy-section'

export function HomePage() {
  const loadTechnology = useCallback(
    () =>
      import('@/features/technology').then((module) => ({
        default: module.TechnologySection,
      })),
    [],
  )
  const loadGuestExperience = useCallback(
    () =>
      import('@/features/guest-experience').then((module) => ({
        default: module.GuestExperienceSection,
      })),
    [],
  )
  const loadDomes = useCallback(
    () =>
      import('@/features/domes').then((module) => ({
        default: module.DomesSection,
      })),
    [],
  )
  const loadAdvantages = useCallback(
    () =>
      import('@/features/advantages').then((module) => ({
        default: module.AdvantagesSection,
      })),
    [],
  )
  const loadTestNight = useCallback(
    () =>
      import('@/features/test-night').then((module) => ({
        default: module.TestNightSection,
      })),
    [],
  )
  const loadWhoSuits = useCallback(
    () =>
      import('@/features/who-suits').then((module) => ({
        default: module.WhoSuitsSection,
      })),
    [],
  )
  const loadModelsPricing = useCallback(
    () =>
      import('@/features/models-pricing').then((module) => ({
        default: module.ModelsPricingSection,
      })),
    [],
  )
  const loadOrderFormats = useCallback(
    () =>
      import('@/features/order-formats').then((module) => ({
        default: module.OrderFormatsSection,
      })),
    [],
  )
  const loadWinterSeason = useCallback(
    () =>
      import('@/features/winter-season').then((module) => ({
        default: module.WinterSeasonSection,
      })),
    [],
  )
  const loadDomeRenovation = useCallback(
    () =>
      import('@/features/dome-renovation').then((module) => ({
        default: module.DomeRenovationSection,
      })),
    [],
  )
  const loadFaq = useCallback(
    () =>
      import('@/features/faq').then((module) => ({
        default: module.FaqSection,
      })),
    [],
  )
  const loadFooter = useCallback(
    () =>
      import('@/features/site-footer').then((module) => ({
        default: module.SiteFooterSection,
      })),
    [],
  )

  return (
    <main className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <LazySection id="technology" loader={loadTechnology} minHeightClassName="min-h-[70vh]" />
      <LazySection id="facts" loader={loadGuestExperience} minHeightClassName="min-h-[70vh]" />
      <LazySection id="domes" loader={loadDomes} minHeightClassName="min-h-[80vh]" />
      <LazySection id="advantages" loader={loadAdvantages} minHeightClassName="min-h-[60vh]" />
      <LazySection loader={loadTestNight} minHeightClassName="min-h-[70vh]" />
      <LazySection id="who-suits" loader={loadWhoSuits} minHeightClassName="min-h-[50vh]" />
      <LazySection
        id="models-pricing"
        loader={loadModelsPricing}
        minHeightClassName="min-h-[90vh]"
      />
      <LazySection
        id="order-formats"
        loader={loadOrderFormats}
        minHeightClassName="min-h-[70vh]"
      />
      <LazySection loader={loadWinterSeason} minHeightClassName="min-h-[70vh]" />
      <LazySection
        id="dome-renovation"
        loader={loadDomeRenovation}
        minHeightClassName="min-h-[70vh]"
      />
      <LazySection id="faq" loader={loadFaq} minHeightClassName="min-h-[40vh]" />
      <LazySection loader={loadFooter} minHeightClassName="min-h-[40vh]" />
    </main>
  )
}
