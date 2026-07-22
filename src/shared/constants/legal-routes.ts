export const LEGAL_ROUTE_SOGLASIE = '/soglasie' as const

export const LEGAL_ROUTE_PRIVACY = '/privacy' as const

export const LEGAL_ROUTE_OFERTA = '/oferta' as const

export const LEGAL_DOCUMENTS = [
  {
    path: LEGAL_ROUTE_SOGLASIE,
    shortLabel: 'Согласие на обработку персональных данных',
    consentLabel: 'Согласие на обработку персональных данных',
  },
  {
    path: LEGAL_ROUTE_PRIVACY,
    shortLabel: 'Политика конфиденциальности',
    consentLabel: 'Политики конфиденциальности',
  },
  {
    path: LEGAL_ROUTE_OFERTA,
    shortLabel: 'Публичная оферта',
    consentLabel: 'Публичной оферты',
  },
] as const
