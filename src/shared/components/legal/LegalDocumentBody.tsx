import { cn } from '@/shared/lib/cn'

export interface LegalDocumentBlock {
  type: 'heading' | 'paragraph' | 'list-item'
  text: string
}

interface LegalDocumentBodyProps {
  blocks: readonly LegalDocumentBlock[]
  className?: string
}

export function LegalDocumentBody({ blocks, className }: LegalDocumentBodyProps) {
  return (
    <article className={cn('legal-prose grid gap-4', className)}>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="type-subheading pt-2 font-semibold uppercase text-accent-alt first:pt-0 min-[721px]:pt-4"
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list-item') {
          return (
            <p key={`${block.type}-${index}`} className="type-body flex gap-2 text-accent-alt">
              <span aria-hidden="true">•</span>
              <span>{block.text}</span>
            </p>
          )
        }

        return (
          <p key={`${block.type}-${index}`} className="type-body text-accent-alt">
            {block.text}
          </p>
        )
      })}
    </article>
  )
}
