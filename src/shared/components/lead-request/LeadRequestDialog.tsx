import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

import { LeadRequestForm, type LeadRequestFormConfig } from './LeadRequestForm'

interface LeadRequestDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle: string
  formConfig: LeadRequestFormConfig
}

export function LeadRequestDialog({
  isOpen,
  onClose,
  title,
  subtitle,
  formConfig,
}: LeadRequestDialogProps) {
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 min-[481px]:p-5 min-[861px]:p-8"
      role="dialog"
    >
      <button
        aria-label="Закрыть"
        className="absolute inset-0 bg-accent-alt/70"
        type="button"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[480px] rounded-lg bg-[#f4f1e8] px-6 py-8 shadow-[0_24px_80px_rgba(32,33,41,0.35)] min-[481px]:px-10 min-[481px]:py-10">
        <button
          ref={closeButtonRef}
          aria-label="Закрыть окно"
          className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-accent-alt/80 text-surface transition-colors hover:bg-accent-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-[721px]:top-4 min-[721px]:right-4"
          type="button"
          onClick={onClose}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ×
          </span>
        </button>

        <h2
          className="type-heading type-heading-tight mb-3 pr-10 uppercase text-accent-alt"
          id={titleId}
        >
          {title}
        </h2>
        <p className="type-body mb-6 text-accent-alt/80 min-[481px]:mb-8">{subtitle}</p>

        <LeadRequestForm config={formConfig} source={title} />
      </div>
    </div>,
    document.body,
  )
}
