import collageAerialImage from '@/assets/images/domes/photo-1.webp'
import collageLakeImage from '@/assets/images/domes/photo-2.webp'
import collageFieldImage from '@/assets/images/domes/photo-3.webp'
import profitabilityIllustration from '@/assets/images/domes/profitability-illustration.webp'
import skyEffectInteriorImage from '@/assets/images/domes/sky-effect-interior.webp'

export const DOMES_LANDSCAPE_COPY = {
  title: 'ВПИШЕТСЯ В ЛЮБОЙ ЛАНДШАФТ',
  subtitle:
    'Деревня хоббитов или космическая миссия? Впечатляет уже на подъезде',
} as const

export const DOMES_LANDSCAPE_COLLAGE = {
  primary: {
    src: collageAerialImage,
    alt: 'Вид сверху на купола в лесу',
  },
  secondaryTop: {
    src: collageFieldImage,
    alt: 'Купол на поляне на закате',
  },
  secondaryBottom: {
    src: collageLakeImage,
    alt: 'Купол на воде в сумерках',
  },
} as const

export type DomesCompactCardData =
  | {
      id: string
      title: string
      subtitle: string
      imageKind: 'photo'
      imageSrc: string
      imageAlt: string
    }
  | {
      id: string
      title: string
      subtitle: string
      imageKind: 'illustration'
      imageSrc: string
      imageAlt: string
    }

export const DOMES_COMPACT_CARDS: DomesCompactCardData[] = [
  {
    id: 'sky-effect',
    title: 'ЭФФЕКТ НЕБЕСНОГО СВОДА ВНУТРИ',
    subtitle:
      'Необычная геометрия внутреннего пространства вызывает восторг и вау-эффект',
    imageKind: 'photo',
    imageSrc: skyEffectInteriorImage,
    imageAlt: 'Интерьер купола с панорамным окном на лес',
  },
  {
    id: 'profitability',
    title: 'ДОХОДНОСТЬ',
    subtitle:
      'Цены на размещение в куполах ГЕОДОМИКА выше, чем в модульных домиках, шатрах и А-фреймах. Окупаемость быстрее',
    imageKind: 'illustration',
    imageSrc: profitabilityIllustration,
    imageAlt: '',
  },
]
