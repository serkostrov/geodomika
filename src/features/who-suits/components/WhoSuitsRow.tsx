import type { WhoSuitsRowData } from '../constants/rows'
import { cn } from '@/shared/lib/cn'

import { WhoSuitsCta } from './WhoSuitsCta'
import { WhoSuitsList } from './WhoSuitsList'

interface WhoSuitsRowProps {
  row: WhoSuitsRowData
  showIntro?: boolean
  introText?: string
}

export function WhoSuitsRow({ row, showIntro = false, introText }: WhoSuitsRowProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 border-b border-border-muted py-8 min-[861px]:grid-cols-4 min-[861px]:gap-x-8 min-[861px]:py-12">
      <div className={cn('min-[861px]:pr-4', !showIntro && 'hidden min-[861px]:block')}>
        {showIntro && introText ? (
          <div className="grid gap-6">
            <p className="type-body text-accent-alt">
              {introText}
            </p>
            <WhoSuitsCta />
          </div>
        ) : null}
      </div>

      <h3 className="type-title text-accent-alt">
        {row.category}
      </h3>

      <p className="type-body text-accent-alt">
        {row.description}
      </p>

      <WhoSuitsList items={row.items} />
    </div>
  )
}
