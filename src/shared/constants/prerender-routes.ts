export const SITE_ORIGIN = 'https://geodomika.ru' as const

export interface PrerenderRoute {
  path: string
  file: string
  title: string
  description: string
}

export const HOME_TITLE = 'Геодомика - Производство геодезических куполов' as const

export const HOME_DESCRIPTION =
  'Круглогодичные купольные дома для турбаз и глэмпингов' as const

export const PRERENDER_ROUTES: readonly PrerenderRoute[] = [
  {
    path: '/',
    file: 'index.html',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  {
    path: '/privacy',
    file: 'privacy/index.html',
    title: 'Политика конфиденциальности | Геодомика',
    description: 'Политика конфиденциальности сайта Геодомика',
  },
  {
    path: '/oferta',
    file: 'oferta/index.html',
    title: 'Публичная оферта | Геодомика',
    description: 'Публичная оферта на поставку купольных домов Геодомика',
  },
  {
    path: '/soglasie',
    file: 'soglasie/index.html',
    title: 'Согласие на обработку персональных данных | Геодомика',
    description: 'Согласие на обработку персональных данных пользователей сайта Геодомика',
  },
]
