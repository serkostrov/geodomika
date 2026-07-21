import { cn } from '@/shared/lib/cn'

import { WINTER_SEASON_DESCRIPTION_PARAGRAPHS, WINTER_SEASON_TITLE_LINES } from '../constants/content'

import { WinterSeasonCta } from './WinterSeasonCta'

export function WinterSeasonCard() {
  return (
    <div className="winter-season-glass w-full max-w-[580px] min-[721px]:rounded-lg min-[721px]:px-12 min-[721px]:py-12">
      <h2 className="type-heading space-stack-title uppercase">
        {WINTER_SEASON_TITLE_LINES.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.segments.map((segment) => (
              <span
                key={segment.text}
                className={cn(
                  segment.tone === 'gold' ? 'text-accent-2' : 'text-white',
                )}
              >
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </h2>

      <div className="type-body space-stack-title grid gap-4 text-surface">
        {WINTER_SEASON_DESCRIPTION_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div>
        <WinterSeasonCta />
      </div>
    </div>
  )
}
