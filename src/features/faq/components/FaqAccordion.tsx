import { useSingleAccordion } from '@/shared/hooks/use-single-accordion'

import { FAQ_ITEMS } from '../constants/items'

import { FaqAccordionItem } from './FaqAccordionItem'

export function FaqAccordion() {
  const { isOpen, toggle } = useSingleAccordion('faq-1')

  return (
    <div>
      {FAQ_ITEMS.map((item, index) => (
        <FaqAccordionItem
          key={item.id}
          isFirst={index === 0}
          isOpen={isOpen(item.id)}
          item={item}
          onToggle={toggle}
        />
      ))}
    </div>
  )
}
