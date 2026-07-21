import domeStructureImage from '@/assets/images/technology/dome-structure.png'

const DOME_STRUCTURE_LABELS = [
  {
    id: 'inner-osb',
    left: 15.91,
    top: 26.61,
    lines: ['ОСП 9мм-12мм (OSB-4)', 'Внутреннее покрытие'],
  },
  {
    id: 'frame',
    left: 30,
    top: 12.47,
    lines: ['Каркас из бруса'],
  },
  {
    id: 'insulation',
    left: 44.06,
    top: 26.61,
    lines: ['Утеплитель', 'пенополистирол', 'ППС-25, 100–140 мм'],
  },
  {
    id: 'outer-osb',
    left: 58.07,
    top: 12.47,
    lines: ['ОСП 9мм-12мм (OSB-4)', 'Внешнее покрытие'],
  },
  {
    id: 'membrane',
    left: 72.11,
    top: 26.61,
    lines: ['Синтетическая жидкая', 'кровельная мембрана'],
  },
  {
    id: 'decorative',
    left: 86.25,
    top: 13.23,
    lines: ['Декоративный', 'шумопоглощающий слой'],
  },
] as const

export function TechnologyStructure() {
  return (
    <div>
      <h3 className="type-title space-stack-title">
        Структура обшивки купола
      </h3>

      <figure className="m-0">
        <div
          className="relative w-full max-w-full @container"
          style={{ aspectRatio: '4174 / 2101' }}
        >
          <img
            alt="Структура обшивки купола: слои панели"
            className="absolute inset-0 h-full w-full object-contain"
            height={2101}
            loading="lazy"
            src={domeStructureImage}
            width={4174}
          />

          <div className="pointer-events-none absolute inset-0 text-[clamp(7px,1.45cqw,15px)] leading-button font-medium text-accent-alt">
            {DOME_STRUCTURE_LABELS.map((label) => (
              <p
                key={label.id}
                className="absolute -translate-x-1/2 -translate-y-full max-w-[11cqw] whitespace-pre-line text-center"
                style={{ left: `${label.left}%`, top: `${label.top}%` }}
              >
                {label.lines.join('\n')}
              </p>
            ))}
          </div>
        </div>
      </figure>
    </div>
  )
}
