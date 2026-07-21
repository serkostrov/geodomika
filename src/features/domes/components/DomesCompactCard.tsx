import { cn } from '@/shared/lib/cn'

import type { DomesCompactCardData } from '../constants/cards'

interface DomesCompactCardProps {
  card: DomesCompactCardData
  className?: string
}

export function DomesCompactCard({ card, className }: DomesCompactCardProps) {
  return (
    <article
      className={cn(
        'flex min-h-[300px] flex-col justify-between gap-5 overflow-hidden rounded-xl border border-border-muted bg-surface p-4 min-[861px]:min-h-[360px] min-[861px]:p-5 min-[1200px]:min-h-[420px] min-[1200px]:p-6',
        className,
      )}
    >
      <div className="grid gap-2 min-[861px]:gap-3">
        <h3 className="type-title font-heading !font-medium uppercase text-accent-alt">
          {card.title}
        </h3>
        <p className="type-caption text-accent-alt">{card.subtitle}</p>
      </div>

      {card.imageKind === 'photo' ? (
        <img
          alt={card.imageAlt}
          className="mt-auto block h-auto w-full rounded-lg object-cover object-center min-[861px]:min-h-[180px] min-[1200px]:min-h-[220px]"
          height={280}
          loading="lazy"
          src={card.imageSrc}
          width={420}
        />
      ) : (
        <img
          alt=""
          aria-hidden="true"
          className="mt-auto block h-auto w-full max-h-[200px] object-contain object-left-bottom min-[861px]:max-h-[220px] min-[1200px]:max-h-[260px]"
          height={240}
          loading="lazy"
          src={card.imageSrc}
          width={420}
        />
      )}
    </article>
  )
}
