import {
  ADVANTAGES_BULLETS,
  ADVANTAGES_HEADING,
  ADVANTAGES_HEADING_ACCENT,
  ADVANTAGES_INTRO,
  ADVANTAGES_SECTION_LABEL,
} from '../constants/content'

export function AdvantagesIntro() {
  return (
    <div>
      <header className="space-header">
        <p className="type-body space-stack-label text-accent-alt">
          {ADVANTAGES_SECTION_LABEL}
        </p>

        <h2 className="type-heading max-w-[750px] uppercase text-accent-alt">
          {ADVANTAGES_HEADING.before}
          <span className="text-accent-hover">{ADVANTAGES_HEADING_ACCENT}</span>
          {ADVANTAGES_HEADING.after}
        </h2>
      </header>

      <div className="grid max-w-[480px] gap-4 type-body text-accent-alt">
        <p>{ADVANTAGES_INTRO}</p>

        <ul className="grid gap-2">
          {ADVANTAGES_BULLETS.map((item) => (
            <li key={item} className="pl-1">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
