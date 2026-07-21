import { AdvantagesSection } from '@/features/advantages'
import { DomesSection } from '@/features/domes'
import { DomeRenovationSection } from '@/features/dome-renovation'
import { FaqSection } from '@/features/faq'
import { GuestExperienceSection } from '@/features/guest-experience'
import { HeroSection } from '@/features/hero'
import { ModelsPricingSection } from '@/features/models-pricing'
import { OrderFormatsSection } from '@/features/order-formats'
import { TechnologySection } from '@/features/technology'
import { TestNightSection } from '@/features/test-night'
import { SiteFooterSection } from '@/features/site-footer'
import { WhoSuitsSection } from '@/features/who-suits'
import { WinterSeasonSection } from '@/features/winter-season'

export function HomePage() {
  return (
    <main className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <TechnologySection />
      <GuestExperienceSection />
      <DomesSection />
      <AdvantagesSection />
      <TestNightSection />
      <WhoSuitsSection />
      <ModelsPricingSection />
      <OrderFormatsSection />
      <WinterSeasonSection />
      <DomeRenovationSection />
      <FaqSection />
      <SiteFooterSection />
    </main>
  )
}
