import { cn } from '@/shared/lib/cn'

import {
  DOME_RENOVATION_SECTION_LABEL,
  DOME_RENOVATION_TITLE_LINES,
} from '../constants/content'

export function DomeRenovationHeader() {
  return (
    <header className="mb-4 min-[721px]:mb-6 min-[1200px]:mb-8">
      <p className="type-body space-stack-label text-accent">
        {DOME_RENOVATION_SECTION_LABEL}
      </p>

      <h2 className="type-heading max-w-[720px] uppercase text-accent">
        {DOME_RENOVATION_TITLE_LINES.map((line, index) => (
          <span
            key={line}
            className={cn(
              'block',
              index >= DOME_RENOVATION_TITLE_LINES.length - 1 && 'text-accent-alt',
            )}
          >
            {line}
          </span>
        ))}
      </h2>
    </header>
  )
}
