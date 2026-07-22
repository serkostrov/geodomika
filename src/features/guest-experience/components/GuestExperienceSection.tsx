import spaceBackground from '@/assets/images/guest-experience/space-bg.webp'
import { Container } from '@/shared/components/layout/container'

import {
  GUEST_EXPERIENCE_LABEL,
  GUEST_EXPERIENCE_SUBTITLE_LINES,
  GUEST_EXPERIENCE_TITLE_LINES,
} from '../constants/content'
import { cn } from '@/shared/lib/cn'

export function GuestExperienceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-accent-alt">
      <div className="space-section-photo relative mx-auto w-full">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          height={900}
          loading="lazy"
          src={spaceBackground}
          width={1600}
        />

        <div
          aria-hidden="true"
          className="guest-experience-overlay pointer-events-none absolute inset-0"
        />

        <div
          aria-hidden="true"
          className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        />

        <Container className="space-section-y-media relative z-10 flex h-full flex-col justify-end min-[721px]:justify-start">
          <p className="type-caption space-stack-label text-surface-warm/80 min-[721px]:type-body">
            {GUEST_EXPERIENCE_LABEL}
          </p>

          <h2 className="type-heading space-stack-title max-w-[16em] uppercase text-accent-2 min-[721px]:max-w-none">
            <span className="min-[721px]:hidden">
              <span>{GUEST_EXPERIENCE_TITLE_LINES[0]} {GUEST_EXPERIENCE_TITLE_LINES[1]}</span>
              <br />
              <span className="text-white">
                {GUEST_EXPERIENCE_TITLE_LINES[2]} {GUEST_EXPERIENCE_TITLE_LINES[3]}
              </span>
            </span>

            <span className="hidden min-[721px]:inline">
              {GUEST_EXPERIENCE_TITLE_LINES.map((line, index) => (
                <span
                  key={line}
                  className={cn(index >= GUEST_EXPERIENCE_TITLE_LINES.length - 2 && 'text-white')}
                >
                  {line}
                  {index < GUEST_EXPERIENCE_TITLE_LINES.length - 1 ? <br /> : null}
                </span>
              ))}
            </span>
          </h2>

          <p className="type-body max-w-[280px] text-surface min-[721px]:max-w-[400px]">
            <span className="min-[721px]:hidden">
              {GUEST_EXPERIENCE_SUBTITLE_LINES.join(' ')}
            </span>
            <span className="hidden min-[721px]:block">
              {GUEST_EXPERIENCE_SUBTITLE_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </p>
        </Container>
      </div>
    </section>
  )
}
