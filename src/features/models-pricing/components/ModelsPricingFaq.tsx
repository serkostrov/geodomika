import { MODELS_PRICING_FAQ } from '../constants/faq'

export function ModelsPricingFaq() {
  return (
    <div className="grid gap-8">
      {MODELS_PRICING_FAQ.map((item) => (
        <div
          key={item.question}
          className="grid gap-3 min-[861px]:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] min-[861px]:gap-x-6"
        >
          <p className="type-body !font-bold text-accent-alt">
            {item.question}
          </p>
          <p className="type-body text-accent-alt">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  )
}
