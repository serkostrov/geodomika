import { cn } from '@/shared/lib/cn'

import { ADVANTAGE_ITEMS } from '../constants/items'

import { AdvantageItem } from './AdvantageItem'

export function AdvantagesGrid() {
  return (
    <div className="grid grid-cols-1 min-[861px]:grid-cols-2">
      {ADVANTAGE_ITEMS.map((item, index) => {
        const row = Math.floor(index / 2)
        const isRightColumn = index % 2 === 1

        return (
          <AdvantageItem
            key={item.id}
            className={cn(
              // Mobile (1 col): separator above every item except the first
              index > 0 && 'border-t border-accent-alt/16',
              // Desktop (2 col): first row has no top border
              row === 0 && 'min-[861px]:border-t-0',
              isRightColumn && 'min-[861px]:border-l min-[861px]:border-accent-alt/16',
            )}
            description={item.description}
            hasIconFrame={item.hasIconFrame}
            iconSrc={item.iconSrc}
            title={item.title}
          />
        )
      })}
    </div>
  )
}
