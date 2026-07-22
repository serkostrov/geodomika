import { PRIVACY_LEGAL_BLOCKS, PRIVACY_LEGAL_TITLE } from './content/privacy'
import { LegalDocumentPage } from './LegalDocumentPage'

export function PrivacyPage() {
  return <LegalDocumentPage blocks={PRIVACY_LEGAL_BLOCKS} title={PRIVACY_LEGAL_TITLE} />
}
