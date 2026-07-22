import { OFERTA_LEGAL_BLOCKS, OFERTA_LEGAL_TITLE } from './content/oferta'
import { LegalDocumentPage } from './LegalDocumentPage'

export function OfertaPage() {
  return <LegalDocumentPage blocks={OFERTA_LEGAL_BLOCKS} title={OFERTA_LEGAL_TITLE} />
}
