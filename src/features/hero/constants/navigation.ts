export interface HeroNavLink {
  label: string
  href: string
}

export const HERO_NAVIGATION_COLUMNS: HeroNavLink[][] = [
  [
    { label: 'технология', href: '#technology' },
    { label: 'преимущества', href: '#advantages' },
    { label: 'купола Геодомика', href: '#domes' },
  ],
  [
    { label: 'факты', href: '#faq' },
    { label: 'для кого', href: '#who-suits' },
    { label: 'модели и цены', href: '#models-pricing' },
  ],
]
