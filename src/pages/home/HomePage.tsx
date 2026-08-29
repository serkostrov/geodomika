import { useEffect } from 'react'

import { AdvantagesSection } from '@/features/advantages'
import { DomeRenovationSection } from '@/features/dome-renovation'
import { DomesSection } from '@/features/domes'
import { FaqSection } from '@/features/faq'
import { GuestExperienceSection } from '@/features/guest-experience'
import { HeroSection } from '@/features/hero'
import { ModelsPricingSection } from '@/features/models-pricing'
import { OrderFormatsSection } from '@/features/order-formats'
import { SiteFooterSection } from '@/features/site-footer'
import { TechnologySection } from '@/features/technology'
import { TestNightSection } from '@/features/test-night'
import { WhoSuitsSection } from '@/features/who-suits'
import { WinterSeasonSection } from '@/features/winter-season'
import { navigateToSection } from '@/shared/lib/section-scroll'

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
      <div id="technology">
        <TechnologySection />
      </div>
      <div id="facts">
        <GuestExperienceSection />
      </div>
      <div id="domes">
        <DomesSection />
      </div>
      <div id="advantages">
        <AdvantagesSection />
      </div>
      <TestNightSection />
      <div id="who-suits">
        <WhoSuitsSection />
      </div>
      <div id="models-pricing">
        <ModelsPricingSection />
      </div>
      <div id="order-formats">
        <OrderFormatsSection />
      </div>
      <WinterSeasonSection />
      <div id="dome-renovation">
        <DomeRenovationSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <SiteFooterSection />
    </main>
  )
}
