import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

interface AccordionItemProps {
  id: string
  title: string
  children: ReactNode
  isOpen: boolean
  isFirst?: boolean
  onToggle: (id: string) => void
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  isFirst = false,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        'border-b border-accent-alt/16',
        isFirst && 'border-t border-accent-alt/16',
      )}
    >
      <button
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-start justify-between gap-4 border-none bg-transparent py-4 text-left text-inherit min-[721px]:gap-6 min-[1200px]:py-8"
        onClick={() => onToggle(id)}
        type="button"
      >
        <span className="type-title flex-1 pr-2 min-[721px]:pr-0">
          {title}
        </span>
        <span
          aria-hidden="true"
          className="type-title shrink-0 whitespace-nowrap leading-none"
        >
          {isOpen ? '[ − ]' : '[ + ]'}
        </span>
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
