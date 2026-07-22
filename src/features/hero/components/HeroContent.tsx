import { HERO_FEATURES } from '../constants/features'

import { HeroCta } from './HeroCta'
import { HeroFeatureItem } from './HeroFeatureItem'

export function HeroContent() {
  return (
    <div className="flex min-h-0 w-full max-w-[900px] flex-1 flex-col">
      <div aria-hidden="true" className="min-h-0 flex-1" />

      <div className="shrink-0 grid gap-6 min-[721px]:gap-8">
        <div className="grid gap-4 min-[721px]:gap-6">
          <p className="type-subheading text-hero-muted min-[721px]:text-[20px] min-[1200px]:text-[22px]">
            Производство геодезических куполов
          </p>

          <h1 className="type-heading type-heading-tight max-w-[760px] uppercase text-white">
            Круглогодичные купольные дома{' '}
            <span className="text-accent-2">для турбаз и глэмпингов</span>
          </h1>

          <p className="type-body max-w-[460px] text-hero-muted">
            <strong className="font-bold text-white">
              Адаптируем размер и наполнение под задачу:
            </strong>{' '}
            от жилья до ресторана или йога-зала
          </p>
        </div>

        <ul className="flex w-full flex-row justify-between gap-2 min-[400px]:gap-3 min-[481px]:gap-4 min-[721px]:justify-start min-[721px]:gap-10">
          {HERO_FEATURES.map((feature) => (
            <HeroFeatureItem
              key={feature.lines[0]}
              icon={
                <img
                  alt={feature.iconAlt}
                  className="size-5"
                  height={20}
                  src={feature.iconSrc}
                  width={20}
                />
              }
            >
              {feature.lines[0]}
              {feature.lines[1] ? (
                <>
                  <br />
                  {feature.lines[1]}
                </>
              ) : null}
            </HeroFeatureItem>
          ))}
        </ul>

        <HeroCta />
      </div>
    </div>
  )
}
