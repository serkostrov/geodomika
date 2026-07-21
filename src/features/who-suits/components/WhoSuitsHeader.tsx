import {
  WHO_SUITS_SECTION_LABEL,
  WHO_SUITS_TITLE_ACCENT,
  WHO_SUITS_TITLE_LINE_2,
  WHO_SUITS_TITLE_REST_LINE_1,
} from '../constants/content'

export function WhoSuitsHeader() {
  return (
    <header className="space-header">
      <p className="type-caption space-stack-label text-accent-alt min-[721px]:type-body">
        {WHO_SUITS_SECTION_LABEL}
      </p>

      <h2 className="type-heading w-full max-w-none break-words uppercase text-accent-alt min-[721px]:max-w-[720px]">
        <span className="text-accent">{WHO_SUITS_TITLE_ACCENT}</span>
        {WHO_SUITS_TITLE_REST_LINE_1}
        <br />
        {WHO_SUITS_TITLE_LINE_2}
      </h2>
    </header>
  )
}
