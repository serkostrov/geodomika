import { cn } from '@/shared/lib/cn'

import {
  DOMES_LANDSCAPE_COLLAGE,
  DOMES_LANDSCAPE_COPY,
} from '../constants/cards'

interface DomesLandscapeBlockProps {
  className?: string
}

export function DomesLandscapeBlock({ className }: DomesLandscapeBlockProps) {
  return (
    <div className={cn('flex min-h-0 flex-col gap-4 min-[861px]:gap-5', className)}>
      <div className="grid gap-2 min-[861px]:gap-3">
        <h3 className="type-title font-heading !font-medium uppercase text-accent-alt">
          {DOMES_LANDSCAPE_COPY.title}
        </h3>
        <p className="type-caption max-w-[340px] text-accent-alt">
          {DOMES_LANDSCAPE_COPY.subtitle}
        </p>
      </div>

      <div className="grid min-h-[240px] flex-1 grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] grid-rows-2 gap-2 min-[481px]:min-h-[300px] min-[861px]:min-h-[360px] min-[861px]:gap-3 min-[1200px]:min-h-[420px]">
        <img
          alt={DOMES_LANDSCAPE_COLLAGE.primary.alt}
          className="row-span-2 h-full w-full rounded-lg object-cover object-center"
          height={640}
          loading="lazy"
          src={DOMES_LANDSCAPE_COLLAGE.primary.src}
          width={400}
        />
        <img
          alt={DOMES_LANDSCAPE_COLLAGE.secondaryTop.alt}
          className="h-full w-full rounded-lg object-cover object-center"
          height={300}
          loading="lazy"
          src={DOMES_LANDSCAPE_COLLAGE.secondaryTop.src}
          width={360}
        />
        <img
          alt={DOMES_LANDSCAPE_COLLAGE.secondaryBottom.alt}
          className="h-full w-full rounded-lg object-cover object-center"
          height={300}
          loading="lazy"
          src={DOMES_LANDSCAPE_COLLAGE.secondaryBottom.src}
          width={360}
        />
      </div>
    </div>
  )
}
