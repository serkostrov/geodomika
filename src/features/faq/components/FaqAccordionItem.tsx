import type { FaqItemData } from '../constants/items'
import { cn } from '@/shared/lib/cn'

interface FaqAccordionItemProps {
  item: FaqItemData
  isOpen: boolean
  isFirst?: boolean
  onToggle: (id: string) => void
}

export function FaqAccordionItem({
  item,
  isOpen,
  isFirst = false,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div
      className={cn(
        'border-b border-border-muted',
        isFirst && 'border-t border-border-muted',
      )}
    >
      <div className="py-4 min-[861px]:py-8">
        <button
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer flex-wrap items-start gap-x-3 gap-y-2 border-none bg-transparent p-0 text-left text-inherit min-[721px]:flex-nowrap min-[721px]:items-center min-[721px]:justify-between min-[861px]:gap-x-6"
          onClick={() => onToggle(item.id)}
          type="button"
        >
          <div className="flex min-w-0 flex-1 items-start gap-x-3 min-[721px]:items-center min-[721px]:gap-x-4">
            <span className="type-caption shrink-0 pt-0.5 leading-none text-accent-alt">
              [ {item.number} ]
            </span>

            <span className="type-subheading min-w-0 flex-1 text-accent-alt">
              {item.question}
            </span>
          </div>

          <span
            aria-hidden="true"
            className="type-subheading shrink-0 self-start leading-none text-accent-alt min-[721px]:self-auto"
          >
            {isOpen ? '[ - ]' : '[ + ]'}
          </span>
        </button>

        <div
          className={cn(
            'grid transition-[grid-template-rows] duration-300 ease-in-out',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className="overflow-hidden">
            {item.answer ? (
              <div className="mt-4">
                <p className="type-body max-w-[720px] pl-[calc(1.5rem+0.75rem)] text-accent-alt min-[721px]:pl-[calc(1.5rem+1rem)] min-[1200px]:max-w-[62%]">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
