import { useState } from 'react'

import { Container } from '@/shared/components/layout/container'

import {
  MODELS_PRICING_MODELS,
  type ModelsPricingModelData,
} from '../constants/models'

import { ModelsPricingCard } from './ModelsPricingCard'
import { ModelsPricingCta } from './ModelsPricingCta'
import { ModelsPricingDialog } from './ModelsPricingDialog'
import { ModelsPricingGallery } from './ModelsPricingGallery'
import { ModelsPricingHeader } from './ModelsPricingHeader'

export function ModelsPricingSection() {
  const [activeModel, setActiveModel] = useState<ModelsPricingModelData | null>(
    null,
  )

  return (
    <section
      className="space-section-y overflow-x-clip bg-surface text-accent-alt"
      id="models-pricing"
    >
      <Container>
        <ModelsPricingHeader />

        <div className="space-block grid grid-cols-1 gap-6 min-[481px]:grid-cols-2 min-[721px]:gap-8 min-[861px]:grid-cols-3 min-[1200px]:flex min-[1200px]:flex-nowrap min-[1200px]:items-stretch min-[1200px]:gap-4">
          {MODELS_PRICING_MODELS.map((model) => (
            <ModelsPricingCard
              key={model.id}
              className="min-[1200px]:min-w-0 min-[1200px]:flex-1 border-0 bg-surface-warm"
              model={model}
              onOpen={setActiveModel}
            />
          ))}
        </div>

        <div className="space-block">
          <ModelsPricingCta />
        </div>

        <ModelsPricingGallery />
      </Container>

      <ModelsPricingDialog
        model={activeModel}
        onClose={() => setActiveModel(null)}
      />
    </section>
  )
}
