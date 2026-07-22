import { Link } from 'react-router-dom'

import { cn } from '@/shared/lib/cn'
import {
  LEGAL_ROUTE_OFERTA,
  LEGAL_ROUTE_PRIVACY,
  LEGAL_ROUTE_SOGLASIE,
} from '@/shared/constants/legal-routes'

interface LegalConsentLabelProps {
  variant?: 'light' | 'dark'
}

export function LegalConsentLabel({ variant = 'light' }: LegalConsentLabelProps) {
  const linkClassName = cn(
    'type-link underline-offset-2',
    variant === 'dark' ? 'decoration-white/50' : 'decoration-accent-alt/40',
  )

  return (
    <>
      Принимаю условия{' '}
      <Link className={linkClassName} to={LEGAL_ROUTE_PRIVACY}>
        Политики конфиденциальности
      </Link>
      ,{' '}
      <Link className={linkClassName} to={LEGAL_ROUTE_OFERTA}>
        Публичной оферты
      </Link>
      , а также даю{' '}
      <Link className={linkClassName} to={LEGAL_ROUTE_SOGLASIE}>
        Согласие на обработку персональных данных
      </Link>
    </>
  )
}
