import {
  DOMES_DESCRIPTION,
  DOMES_QUOTE_HIGHLIGHT,
  DOMES_QUOTE_TEXT,
  DOMES_SECTION_LABEL,
} from '../constants/content'

import { DomesAuthor } from './DomesAuthor'

export function DomesQuote() {
  return (
    <div className="space-cols grid grid-cols-1 min-[861px]:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)]">
      <p className="type-body text-accent-alt">{DOMES_SECTION_LABEL}</p>

      <div className="grid gap-6 min-[861px]:gap-8">
        <blockquote className="type-heading max-w-[18em] uppercase text-accent-alt min-[1200px]:max-w-none">
          {DOMES_QUOTE_TEXT.before}
          <span className="text-accent">{DOMES_QUOTE_HIGHLIGHT}</span>
          {DOMES_QUOTE_TEXT.after}
        </blockquote>

        <div className="grid max-w-[560px] gap-5 justify-self-start min-[861px]:justify-self-end">
          <p className="type-title text-accent-alt">{DOMES_DESCRIPTION}</p>
          <DomesAuthor />
        </div>
      </div>
    </div>
  )
}
