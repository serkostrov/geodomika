import { Container } from '@/shared/components/layout/container'

import { OrderFormatsHeader } from './OrderFormatsHeader'
import { OrderFormatsTable } from './OrderFormatsTable'

export function OrderFormatsSection() {
  return (
    <section
      className="space-section-y bg-surface-light text-accent-alt"
    >
      <Container>
        <OrderFormatsHeader />
        <OrderFormatsTable />
      </Container>
    </section>
  )
}
