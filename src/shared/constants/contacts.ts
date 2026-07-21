export const CONTACT_EMAIL = 'geodomika@yandex.ru' as const

export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}` as const

export interface ContactPhone {
  display: string
  href: string
}

export const CONTACT_PHONES: ContactPhone[] = [
  { display: '8 (845) 244-82-10', href: 'tel:+78452448210' },
  { display: '8 (917) 208-42-10', href: 'tel:+79172084210' },
]

export const SOCIAL_URL_VK = 'https://vk.ru/club239016788' as const

export const SOCIAL_URL_TELEGRAM = 'https://t.me/geodomika' as const

export const SOCIAL_URL_MAX =
  'https://max.ru/u/f9LHodD0cOJYRC9ap_JzgpcCA-uvbEIVfkGJAb9owkw7iTK97e-f42EHlvA' as const

/** Номер аккаунта в MAX (мобильный). Прямой deeplink по номеру у MAX не поддерживается. */
export const MAX_MESSENGER_PHONE_E164 = '+79172084210' as const

/** Открывает чат с ГЕОДОМИКА в приложении или web.max.ru */
export const MAX_CHAT_HREF = SOCIAL_URL_MAX
