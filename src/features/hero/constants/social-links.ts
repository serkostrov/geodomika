import maxIcon from '@/assets/icons/hero/max-icon.svg'
import tgIcon from '@/assets/icons/hero/tg.svg'
import vkIcon from '@/assets/icons/hero/vk.svg'
import {
  SOCIAL_URL_MAX,
  SOCIAL_URL_TELEGRAM,
  SOCIAL_URL_VK,
} from '@/shared/constants/contacts'

export interface HeroSocialLink {
  label: string
  href: string
  iconSrc: string
}

export const HERO_SOCIAL_LINKS: HeroSocialLink[] = [
  { label: 'ВКонтакте', href: SOCIAL_URL_VK, iconSrc: vkIcon },
  { label: 'Telegram', href: SOCIAL_URL_TELEGRAM, iconSrc: tgIcon },
  { label: 'MAX', href: SOCIAL_URL_MAX, iconSrc: maxIcon },
]
