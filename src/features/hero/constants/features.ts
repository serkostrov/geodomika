import leafIcon from '@/assets/icons/hero/leaf.svg'
import starIcon from '@/assets/icons/hero/star.svg'

export interface HeroFeature {
  iconSrc: string
  iconAlt: string
  lines: [string, string]
}

export const HERO_FEATURES: HeroFeature[] = [
  {
    iconSrc: leafIcon,
    iconAlt: '',
    lines: ['Свой завод в Саратове,', 'без посредников'],
  },
  {
    iconSrc: starIcon,
    iconAlt: '',
    lines: ['Проектируем под', '−40 °C'],
  },
]
