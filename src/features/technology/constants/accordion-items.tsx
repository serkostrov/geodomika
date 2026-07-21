import type { AccordionEntry } from '@/shared/components/ui/accordion'

import {
  TechnologyAccordionBulletItem,
  TechnologyAccordionBulletList,
  TechnologyAccordionParagraph,
} from '../components/TechnologyAccordionContent'

export const TECHNOLOGY_ACCORDION_ITEMS: AccordionEntry[] = [
  {
    id: 'technology-difference',
    title:
      'Наша технология отличается от других производителей геодезических куполов',
    content: (
      <TechnologyAccordionBulletList>
        <TechnologyAccordionBulletItem>
          Утеплитель ППС-25 100–140 мм — часть несущей конструкции{' '}
          <span className="font-semibold min-[721px]:uppercase">
            дополнительно усиливает каркас и сохраняет тепло
          </span>
        </TechnologyAccordionBulletItem>
        <TechnologyAccordionBulletItem>
          Треугольники из пенополистирола точно подогнаны друг к другу, встают
          в замок и берут на себя часть нагрузки. Это не просто каркасник с
          закладным утеплителем, а жёсткая самонесущая система.
        </TechnologyAccordionBulletItem>
      </TechnologyAccordionBulletList>
    ),
  },
  {
    id: 'own-production',
    title: 'Собственное производство',
    content: (
      <TechnologyAccordionParagraph>
        Максимальная подготовка в цеху для быстрой сборки на месте. Деревянный
        каркас, обработанный огне-биозащитой, собран в готовые треугольники.
        Внешняя обшивка приклеена к плотному утеплителю, зафиксирована
        механически и обработана кровельной жидкой мембраной. Готовые
        треугольники внутренней обшивки крепятся к деревянному каркасу.
      </TechnologyAccordionParagraph>
    ),
  },
  {
    id: 'energy-efficiency',
    title: 'Энергоэффективность',
    content: (
      <TechnologyAccordionParagraph>
        Герметичность соединений с отсутствием мостиков холода, лучшее
        соотношение площади «стен» к площади пола, идеальные условия для
        естественной конвекции внутри с отсутствием углов застоя воздуха –
        максимальная энергоэффективность, как на обогреве, так и на охлаждении.
        Экономия до 40%.
      </TechnologyAccordionParagraph>
    ),
  },
  {
    id: 'flexibility',
    title: 'Гибкость под ваши задачи',
    content: (
      <TechnologyAccordionParagraph>
        Меняем размеры и наполнение: от стандартных 12–38 м² до нестандартных
        проектов (рестораны, йога-залы, офисы). Фиксированная смета без
        скрытых платежей.
      </TechnologyAccordionParagraph>
    ),
  },
  {
    id: 'safety-comfort',
    title: 'Безопасность и комфорт',
    content: (
      <TechnologyAccordionParagraph>
        Витражное остекление из закалённого стекла (как на автомобилях) для
        безопасности ваших гостей. Внешнее декоративное покрытие – краска из
        натуральной пробки для максимального шумопоглащения во время дождя.
      </TechnologyAccordionParagraph>
    ),
  },
]
