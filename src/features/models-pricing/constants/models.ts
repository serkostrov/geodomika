import bykImage from '@/assets/images/models-pricing/models/byk-d6.webp'
import kashtanImage from '@/assets/images/models-pricing/models/kashtan-d7.webp'
import kedrImage from '@/assets/images/models-pricing/models/kedr-d7.webp'
import klenImage from '@/assets/images/models-pricing/models/klen-d4.webp'
import yasenImage from '@/assets/images/models-pricing/models/yasen-d5.webp'
import bykPopupImage from '@/assets/images/models-pricing/popups/byk-d6.webp'
import kashtanPopupImage from '@/assets/images/models-pricing/popups/kashtan-d7.webp'
import kedrPopupImage from '@/assets/images/models-pricing/popups/kedr-d7.webp'
import klenPopupImage from '@/assets/images/models-pricing/popups/klen-d4.webp'
import yasenPopupImage from '@/assets/images/models-pricing/popups/yasen-d5.webp'

export interface ModelsPricingPriceRow {
  label: string
  value: string
}

export interface ModelsPricingModelData {
  id: string
  name: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  popupImageSrc: string
  popupTitle: string
  area: string
  diameter: string
  height: string
  walls: string
  prices: ModelsPricingPriceRow[]
}

export const MODELS_PRICING_MODELS: ModelsPricingModelData[] = [
  {
    id: 'klen-d4',
    name: 'КЛЕН · D4',
    imageSrc: klenImage,
    imageAlt: 'Модель купола Клен D4',
    imageWidth: 287,
    imageHeight: 150,
    popupImageSrc: klenPopupImage,
    popupTitle: 'Жилой геокупол «Клён»',
    area: '12 м²',
    diameter: 'Ø: 4 м',
    height: 'высота: 2,4 м',
    walls: 'стены: 100 мм',
    prices: [
      { label: 'Домокомплект', value: '345 000 ₽' },
      { label: 'Со\u00A0сборкой', value: '660 000 ₽' },
      { label: 'Под ключ', value: '990 000 ₽' },
    ],
  },
  {
    id: 'yasen-d5',
    name: 'ЯСЕНЬ · D5',
    imageSrc: yasenImage,
    imageAlt: 'Модель купола Ясень D5',
    imageWidth: 162,
    imageHeight: 114,
    popupImageSrc: yasenPopupImage,
    popupTitle: 'Жилой геокупол «Ясень»',
    area: '18 м²',
    diameter: 'Ø: 5 м',
    height: 'высота: 3 м',
    walls: 'стены: 125 мм',
    prices: [
      { label: 'Домокомплект', value: '510 000 ₽' },
      { label: 'Со\u00A0сборкой', value: '900 000 ₽' },
      { label: 'Под ключ', value: '1 450 000 ₽' },
    ],
  },
  {
    id: 'byk-d6',
    name: 'БУК · D6',
    imageSrc: bykImage,
    imageAlt: 'Модель купола Бук D6',
    imageWidth: 304,
    imageHeight: 158,
    popupImageSrc: bykPopupImage,
    popupTitle: 'Жилой геокупол «Бук»',
    area: '26,6 м²',
    diameter: 'Ø: 6 м',
    height: 'высота: 3,6 м',
    walls: 'стены: 140 мм',
    prices: [
      { label: 'Домокомплект', value: '750 000 ₽' },
      { label: 'Со\u00A0сборкой', value: '1 300 000 ₽' },
      { label: 'Под ключ', value: '2 150 000 ₽' },
    ],
  },
  {
    id: 'kashtan-d7',
    name: 'КАШТАН · D7',
    imageSrc: kashtanImage,
    imageAlt: 'Модель купола Каштан D7',
    imageWidth: 162,
    imageHeight: 114,
    popupImageSrc: kashtanPopupImage,
    popupTitle: 'Жилой геокупол «Каштан»',
    area: '38 м²',
    diameter: 'Ø: 7 м',
    height: 'высота: 3,5 м',
    walls: 'стены: 140 мм',
    prices: [
      { label: 'Домокомплект', value: '1 065 000 ₽' },
      { label: 'Со\u00A0сборкой', value: '1 825 000 ₽' },
      { label: 'Под ключ', value: '3 050 000 ₽' },
    ],
  },
  {
    id: 'kedr-d7',
    name: 'КЕДР · D7',
    imageSrc: kedrImage,
    imageAlt: 'Модель купола Кедр D7',
    imageWidth: 304,
    imageHeight: 158,
    popupImageSrc: kedrPopupImage,
    popupTitle: 'Жилой геокупол «Кедр»',
    area: '38 м²',
    diameter: 'Ø: 7 м',
    height: 'высота: 4,7 м',
    walls: 'с антресолью',
    prices: [
      { label: 'Домокомплект', value: '1 165 000 ₽' },
      { label: 'Со\u00A0сборкой', value: '2 100 000 ₽' },
      { label: 'Под ключ', value: '3 360 000 ₽' },
    ],
  },
]
