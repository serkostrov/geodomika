import { cn } from '@/shared/lib/cn'
import {
  LEGAL_ROUTE_OFERTA,
  LEGAL_ROUTE_PRIVACY,
  LEGAL_ROUTE_SOGLASIE,
} from '@/shared/constants/legal-routes'

import { LegalDocumentLink } from './LegalDocumentLink'

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
      <LegalDocumentLink className={linkClassName} to={LEGAL_ROUTE_PRIVACY}>
        Политики конфиденциальности
      </LegalDocumentLink>
      ,{' '}
      <LegalDocumentLink className={linkClassName} to={LEGAL_ROUTE_OFERTA}>
        Публичной оферты
      </LegalDocumentLink>
      , а также даю{' '}
      <LegalDocumentLink className={linkClassName} to={LEGAL_ROUTE_SOGLASIE}>
        Согласие на обработку персональных данных
      </LegalDocumentLink>
    </>
  )
}
