import { useEffect } from 'react'

import { Container } from '@/shared/components/layout/container'
import {
  LegalDocumentBody,
  type LegalDocumentBlock,
} from '@/shared/components/legal/LegalDocumentBody'
import { LegalPageHeader } from '@/shared/components/legal/LegalPageHeader'
import { stripDuplicateTitleHeading } from '@/shared/components/legal/legal-document-utils'

interface LegalDocumentPageProps {
  title: string
  blocks: readonly LegalDocumentBlock[]
}

export function LegalDocumentPage({ blocks, title }: LegalDocumentPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="min-h-svh bg-surface-light text-accent-alt">
      <Container className="space-section-y">
        <LegalPageHeader currentPage={title} />

        <h1 className="type-heading uppercase text-accent-alt">{title}</h1>
        <LegalDocumentBody
          blocks={stripDuplicateTitleHeading(title, blocks)}
          className="mt-6 min-[721px]:mt-8"
        />
      </Container>
    </div>
  )
}
