import saveTentCoupleImage from '@/assets/images/dome-renovation/save-tent-couple.webp'
import tentCoupleImage from '@/assets/images/dome-renovation/tent-couple.webp'
import woodCoupleImage from '@/assets/images/dome-renovation/wood-couple.webp'

export interface DomeRenovationCardData {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
}

export const DOME_RENOVATION_LEFT_CARDS: DomeRenovationCardData[] = [
  {
    id: 'tent-dome',
    title: 'У вас есть тентовый купол?',
    imageSrc: tentCoupleImage,
    imageAlt: 'Белый тентовый купол на деревянной террасе в лесу',
  },
  {
    id: 'comfort-room',
    title: 'Получаете полноценный комфортный номер',
    imageSrc: woodCoupleImage,
    imageAlt: 'Деревянный купол на террасе в лесу после реновации',
  },
]

export const DOME_RENOVATION_INTERIOR_CARD: DomeRenovationCardData = {
  id: 'save-interior',
  title: 'Сохраняется все внутреннее наполнение',
  imageSrc: saveTentCoupleImage,
  imageAlt: 'Интерьер купола с мебелью на деревянном основании',
}
