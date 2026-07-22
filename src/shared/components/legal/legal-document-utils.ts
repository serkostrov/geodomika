import type { LegalDocumentBlock } from '@/shared/components/legal/LegalDocumentBody'

export interface LegalDocumentSection {
  title: string
  blocks: readonly LegalDocumentBlock[]
}

export function normalizeLegalTitle(text: string) {
  return text.trim().toUpperCase()
}

export function stripDuplicateTitleHeading(
  title: string,
  blocks: readonly LegalDocumentBlock[],
): readonly LegalDocumentBlock[] {
  const first = blocks[0]
  if (!first || first.type !== 'heading') return blocks

  if (normalizeLegalTitle(first.text) === normalizeLegalTitle(title)) {
    return blocks.slice(1)
  }

  return blocks
}

export function flattenLegalSections(
  pageTitle: string,
  sections: readonly LegalDocumentSection[],
): readonly LegalDocumentBlock[] {
  const blocks: LegalDocumentBlock[] = []

  for (const section of sections) {
    const sectionBlocks = stripDuplicateTitleHeading(section.title, section.blocks)

    if (normalizeLegalTitle(section.title) !== normalizeLegalTitle(pageTitle)) {
      blocks.push({ type: 'heading', text: section.title.toUpperCase() })
    }

    blocks.push(...sectionBlocks)
  }

  return blocks
}
