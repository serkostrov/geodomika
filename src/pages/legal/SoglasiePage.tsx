import { SOGLASIE_LEGAL_BLOCKS, SOGLASIE_LEGAL_TITLE } from './content/soglasie'
import { LegalDocumentPage } from './LegalDocumentPage'

export function SoglasiePage() {
  return <LegalDocumentPage blocks={SOGLASIE_LEGAL_BLOCKS} title={SOGLASIE_LEGAL_TITLE} />
}
