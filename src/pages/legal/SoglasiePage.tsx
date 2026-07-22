import { SOGLASIE_LEGAL_SECTIONS } from './content/soglasie'
import { LegalDocumentPage } from './LegalDocumentPage'

export function SoglasiePage() {
  return <LegalDocumentPage sections={SOGLASIE_LEGAL_SECTIONS} />
}
