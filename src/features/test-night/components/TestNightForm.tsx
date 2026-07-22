import { useId, useState } from 'react'

import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { submitLead } from '@/shared/api/submit-lead'
import { LegalConsentLabel } from '@/shared/components/legal/LegalConsentLabel'

import {
  TEST_NIGHT_PHONE_PLACEHOLDER,
  TEST_NIGHT_SUBMIT_LABEL,
  TEST_NIGHT_SUBTITLE,
} from '../constants/content'

import { TestNightSocialRow } from './TestNightSocialRow'

export function TestNightForm() {
  const [phone, setPhone] = useState('')
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const policyCheckboxId = useId()

  const canSubmit = isPolicyAccepted && phone.trim().length > 0 && !isSubmitting

  if (isSubmitted) {
    return (
      <div className="grid gap-3 py-2">
        <p className="type-subheading text-white">Заявка отправлена</p>
        <p className="type-body text-white/80">Мы свяжемся с вами в ближайшее время</p>
        <TestNightSocialRow />
      </div>
    )
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        if (!canSubmit) return

        setError(null)
        setIsSubmitting(true)

        void submitLead({
          source: TEST_NIGHT_SUBTITLE,
          phone: phone.trim(),
          policyAccepted: isPolicyAccepted,
        })
          .then(() => {
            setIsSubmitted(true)
          })
          .catch(() => {
            setError('Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в мессенджер.')
          })
          .finally(() => {
            setIsSubmitting(false)
          })
      }}
    >
      <label className="sr-only" htmlFor="test-night-phone">
        {TEST_NIGHT_PHONE_PLACEHOLDER}
      </label>
      <input
        className="type-input h-12 w-full rounded-[5px] border border-white/30 bg-white/10 px-4 text-white backdrop-blur-md placeholder:text-white/50 focus:border-white/60 focus:outline-none disabled:opacity-60 min-[721px]:bg-transparent min-[721px]:backdrop-blur-none"
        disabled={isSubmitting}
        id="test-night-phone"
        name="phone"
        onChange={(event) => setPhone(event.target.value)}
        placeholder={TEST_NIGHT_PHONE_PLACEHOLDER}
        required
        type="tel"
        value={phone}
      />

      <div className="flex items-start gap-2.5">
        <input
          checked={isPolicyAccepted}
          className="ui-checkbox ui-checkbox--on-dark"
          disabled={isSubmitting}
          id={policyCheckboxId}
          name="policy"
          onChange={(event) => setIsPolicyAccepted(event.target.checked)}
          type="checkbox"
        />
        <label
          className="text-xs! type-helper text-white/70"
          htmlFor={policyCheckboxId}
        >
          <LegalConsentLabel variant="dark" />
        </label>
      </div>

      {error ? <p className="type-helper text-red-200">{error}</p> : null}

      <div className="mt-4 flex items-center gap-2 min-[481px]:mt-6 min-[481px]:gap-3">
        <button
          className="type-button inline-flex h-[43px] items-center justify-center rounded-[5px] bg-cream px-5 text-accent-alt transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 min-[481px]:h-[50px] min-[481px]:px-8"
          disabled={!canSubmit}
          type="submit"
        >
          {isSubmitting ? 'Отправляем…' : TEST_NIGHT_SUBMIT_LABEL}
        </button>
        <button
          aria-label={TEST_NIGHT_SUBMIT_LABEL}
          className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-cream text-accent-alt transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 min-[481px]:size-[50px]"
          disabled={!canSubmit}
          type="submit"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-3.5 w-4"
            height={14}
            src={arrowRightIcon}
            width={16}
          />
        </button>
      </div>

      <TestNightSocialRow />
    </form>
  )
}
