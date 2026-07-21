import {
  MODELS_PRICING_DESCRIPTION,
  MODELS_PRICING_SECTION_LABEL,
  MODELS_PRICING_TITLE_ACCENT,
  MODELS_PRICING_TITLE_LINE_2,
  MODELS_PRICING_TITLE_REST,
} from '../constants/content'

import { ModelsPricingFaq } from './ModelsPricingFaq'

export function ModelsPricingHeader() {
  return (
    <header className="space-header">
      <p className="type-body space-stack-label text-accent-alt">
        {MODELS_PRICING_SECTION_LABEL}
      </p>

      <h2 className="type-heading space-stack-title max-w-[900px] uppercase">
        <span className="text-accent">{MODELS_PRICING_TITLE_ACCENT}</span>
        <span className="text-accent-alt">{MODELS_PRICING_TITLE_REST}</span>
        <br />
        <span className="text-accent-alt">{MODELS_PRICING_TITLE_LINE_2}</span>
      </h2>

      <div className="space-cols grid min-[861px]:grid-cols-2">
        <p className="type-body max-w-[700px] text-accent-alt">
          {MODELS_PRICING_DESCRIPTION}
        </p>

        <ModelsPricingFaq />
      </div>
    </header>
  )
}
