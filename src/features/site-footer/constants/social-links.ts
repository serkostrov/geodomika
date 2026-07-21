import maxIcon from '@/assets/icons/hero/max-icon.svg'
import tgIcon from '@/assets/icons/hero/tg.svg'
import vkIcon from '@/assets/icons/hero/vk.svg'
import {
  SOCIAL_URL_MAX,
  SOCIAL_URL_TELEGRAM,
  SOCIAL_URL_VK,
} from '@/shared/constants/contacts'

export interface SiteFooterSocialLink {
  label: string
  href: string
  iconSrc: string
}

export const SITE_FOOTER_SOCIAL_LINKS: SiteFooterSocialLink[] = [
  { label: 'ВКонтакте', href: SOCIAL_URL_VK, iconSrc: vkIcon },
  { label: 'Telegram', href: SOCIAL_URL_TELEGRAM, iconSrc: tgIcon },
  { label: 'Max', href: SOCIAL_URL_MAX, iconSrc: maxIcon },
]
