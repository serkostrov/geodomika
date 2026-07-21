import {
  FAQ_SECTION_LABEL,
  FAQ_TITLE_LINE_1,
  FAQ_TITLE_LINE_2,
} from '../constants/content'

export function FaqHeader() {
  return (
    <header className="space-header">
      <p className="type-body space-stack-label text-accent-alt">{FAQ_SECTION_LABEL}</p>

      <h2 className="type-heading max-w-[900px] uppercase">
        <span className="block text-accent-alt">{FAQ_TITLE_LINE_1}</span>
        <span className="block text-accent">{FAQ_TITLE_LINE_2}</span>
      </h2>
    </header>
  )
}
