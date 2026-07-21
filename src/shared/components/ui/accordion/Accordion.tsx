import type { ReactNode } from 'react'

import { useSingleAccordion } from '@/shared/hooks/use-single-accordion'

import { AccordionItem } from './AccordionItem'

export interface AccordionEntry {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionEntry[]
  defaultOpenId?: string
  className?: string
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const { isOpen, toggle } = useSingleAccordion(defaultOpenId ?? null)

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          isFirst={index === 0}
          isOpen={isOpen(item.id)}
          onToggle={toggle}
          title={item.title}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
