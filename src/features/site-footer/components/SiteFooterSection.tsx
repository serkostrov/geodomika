import { Container } from '@/shared/components/layout/container'

import { SiteFooterAddress } from './SiteFooterAddress'
import { SiteFooterBackground } from './SiteFooterBackground'
import { SiteFooterBottomBar } from './SiteFooterBottomBar'
import { SiteFooterBrand } from './SiteFooterBrand'
import { SiteFooterContacts } from './SiteFooterContacts'

export function SiteFooterSection() {
  return (
    <footer className="space-section-y-footer relative overflow-hidden bg-accent-alt text-white">
      <SiteFooterBackground />

      <Container className="relative z-10">
        <div className="grid gap-10 min-[721px]:grid-cols-2 min-[721px]:gap-12 min-[1200px]:grid-cols-[minmax(0,1.55fr)_minmax(0,0.9fr)_minmax(0,0.55fr)] min-[1200px]:gap-x-16 min-[1200px]:gap-y-0">
          <SiteFooterBrand />
          <SiteFooterContacts />
          <SiteFooterAddress />
        </div>

        <SiteFooterBottomBar />
      </Container>
    </footer>
  )
}
