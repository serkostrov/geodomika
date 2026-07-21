import type { KeyboardEvent } from 'react'

import type { ModelsPricingModelData } from '../constants/models'
import { cn } from '@/shared/lib/cn'

interface ModelsPricingCardProps {
  model: ModelsPricingModelData
  className?: string
  onOpen?: (model: ModelsPricingModelData) => void
}

export function ModelsPricingCard({
  model,
  className,
  onOpen,
}: ModelsPricingCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onOpen) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(model)
    }
  }

  return (
    <article
      className={cn(
        'grid content-start gap-3 rounded-lg border border-accent/20 p-4 transition-colors min-[481px]:gap-4 min-[1200px]:px-3',
        onOpen &&
          'cursor-pointer hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
      {...(onOpen
        ? {
            role: 'button' as const,
            tabIndex: 0,
            onClick: () => onOpen(model),
            onKeyDown: handleKeyDown,
          }
        : {})}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 min-[481px]:grid-cols-1 min-[481px]:items-stretch">
        <div className="order-2 flex h-[100px] items-end justify-end min-[481px]:order-1 min-[481px]:h-[120px] min-[481px]:justify-start min-[1200px]:h-[140px]">
          <img
            alt={model.imageAlt}
            className="h-full w-auto max-w-[140px] object-contain object-right min-[481px]:max-w-full min-[481px]:object-left"
            height={model.imageHeight}
            loading="lazy"
            src={model.imageSrc}
            width={model.imageWidth}
          />
        </div>

        <div className="order-1 grid gap-2 min-[481px]:order-2 min-[481px]:gap-3">
          <h3 className="type-title font-heading uppercase text-accent-alt">
            {model.name}
          </h3>

          <ul className="type-body grid gap-1 font-medium text-accent-alt">
            <li>{model.area}</li>
            <li>{model.diameter}</li>
            <li>{model.height}</li>
            <li>{model.walls}</li>
          </ul>
        </div>
      </div>

      <ul className="grid gap-2 border-t border-accent/10 pt-3 min-[481px]:mt-0 min-[481px]:border-0 min-[481px]:pt-1">
        {model.prices.map((price) => (
          <li
            key={price.label}
            className="type-body flex items-baseline justify-between gap-x-2 gap-y-0.5 text-accent-alt min-[1200px]:gap-x-1"
          >
            <span className="min-w-0 leading-snug">{price.label}</span>
            <span className="shrink-0 text-right font-semibold leading-snug whitespace-nowrap">
              {price.value}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
