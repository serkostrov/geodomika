import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoIcon from '@/assets/icons/hero/logo.svg'
import { Container } from '@/shared/components/layout/container'
import {
  LegalDocumentBody,
  type LegalDocumentBlock,
} from '@/shared/components/legal/LegalDocumentBody'

export interface LegalDocumentSection {
  title: string
  blocks: readonly LegalDocumentBlock[]
}

type LegalDocumentPageProps =
  | {
      title: string
      blocks: readonly LegalDocumentBlock[]
      sections?: never
    }
  | {
      sections: readonly LegalDocumentSection[]
      title?: never
      blocks?: never
    }

export function LegalDocumentPage(props: LegalDocumentPageProps) {
  const pageKey = props.sections
    ? props.sections.map((section) => section.title).join('|')
    : props.title

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageKey])

  return (
    <div className="min-h-svh bg-surface-light text-accent-alt">
      <Container className="space-section-y">
        <header className="flex items-center justify-between gap-4 pb-6">
          <Link aria-label="Геодомика — на главную" className="inline-flex shrink-0" to="/">
            <img alt="Геодомика" className="h-[68px] w-[76px]" height={68} src={logoIcon} width={76} />
          </Link>

          <Link
            className="type-button text-accent transition-colors hover:text-accent-hover"
            to="/"
          >
            На главную
          </Link>
        </header>

        {props.sections ? (
          <div className="grid gap-16 min-[721px]:gap-20">
            {props.sections.map((section, index) => (
              <section key={`${section.title}-${index}`}>
                <h1 className="type-heading uppercase text-accent-alt">{section.title}</h1>
                <LegalDocumentBody blocks={section.blocks} className="mt-6 min-[721px]:mt-8" />
              </section>
            ))}
          </div>
        ) : (
          <>
            <h1 className="type-heading uppercase text-accent-alt">{props.title}</h1>
            <LegalDocumentBody blocks={props.blocks} />
          </>
        )}
      </Container>
    </div>
  )
}
