export type OrderFormatPackageKey = 'kit' | 'assembly' | 'turnkey'

export type OrderFormatStatus = 'included' | 'excluded'

export interface OrderFormatTableRow {
  id: string
  label: string
  kit: OrderFormatStatus
  assembly: OrderFormatStatus
  turnkey: OrderFormatStatus
}

export interface OrderFormatTableGroup {
  id: string
  title: string
  rows: OrderFormatTableRow[]
}

export const ORDER_FORMATS_TABLE_GROUPS: OrderFormatTableGroup[] = [
  {
    id: 'construction',
    title: 'Конструкция купола',
    rows: [
      {
        id: 'frame',
        label: 'Деревянный каркас и крепеж',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'insulation',
        label: 'Утеплитель ППС-25 (треугольники в сборе)',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'sealant',
        label: 'Жидкая мембрана, герметик, лента для стыков',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'onsite-assembly',
        label: 'Сборка каркаса и обшивки на участке',
        kit: 'excluded',
        assembly: 'included',
        turnkey: 'included',
      },
    ],
  },
  {
    id: 'windows-doors',
    title: 'Окна и двери',
    rows: [
      {
        id: 'fixed-glazing',
        label: 'Стеклопакеты нераспашные (закаленное стекло)',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'opening-window',
        label: 'Распашное окно и портал',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'entrance-door',
        label: 'Входная дверь ПВХ и портал',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'installation',
        label: 'Установка окон и двери',
        kit: 'excluded',
        assembly: 'included',
        turnkey: 'included',
      },
    ],
  },
  {
    id: 'finishing',
    title: 'Внутренняя и внешняя отделка',
    rows: [
      {
        id: 'osb',
        label: 'Внутренняя обшивка ОСП (OSB-4)',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
      {
        id: 'lacquer',
        label: 'Покрытие обшивки акриловым лаком',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'trims',
        label: 'Откосы, нащельники, декоративные накладки',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'exterior-layer',
        label: 'Внешний декоративный слой (пробка / камешек)',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'water-repellent',
        label: 'Обработка водоотталкивающим составом',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
    ],
  },
  {
    id: 'utilities',
    title: 'Санузел и коммуникации',
    rows: [
      {
        id: 'bathroom-partition',
        label: 'Перегородка санузла, дверь, отделка',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'flooring',
        label: 'Напольное покрытие (промышленный линолеум)',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'electrical',
        label: 'Электрика: розетки, выключатели, светильники*',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'plumbing',
        label: 'Разводка воды, душевой поддон, сантехника*',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
      {
        id: 'countertop',
        label: 'Кухонная столешница',
        kit: 'excluded',
        assembly: 'excluded',
        turnkey: 'included',
      },
    ],
  },
  {
    id: 'documents',
    title: 'Документы',
    rows: [
      {
        id: 'instructions',
        label: 'Инструкция по сборке (PDF и видео)',
        kit: 'included',
        assembly: 'included',
        turnkey: 'included',
      },
    ],
  },
]
