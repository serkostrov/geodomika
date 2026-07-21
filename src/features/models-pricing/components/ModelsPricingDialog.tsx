import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

import type { ModelsPricingModelData } from '../constants/models'

interface ModelsPricingDialogProps {
  model: ModelsPricingModelData | null
  onClose: () => void
}

export function ModelsPricingDialog({ model, onClose }: ModelsPricingDialogProps) {
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!model) return

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
  }, [model, onClose])

  if (!model) return null

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

      <div className="relative z-10 max-h-[min(92svh,920px)] w-full max-w-[1280px] overflow-auto rounded-lg bg-[#f4f1e8] shadow-[0_24px_80px_rgba(32,33,41,0.35)]">
        <h2 className="sr-only" id={titleId}>
          {model.popupTitle}
        </h2>

        <button
          ref={closeButtonRef}
          aria-label="Закрыть окно"
          className="absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-accent-alt/80 text-surface transition-colors hover:bg-accent-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-[721px]:top-4 min-[721px]:right-4"
          type="button"
          onClick={onClose}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ×
          </span>
        </button>

        <img
          alt={model.popupTitle}
          className="block h-auto w-full"
          height={1600}
          src={model.popupImageSrc}
          width={2846}
        />
      </div>
    </div>,
    document.body,
  )
}
