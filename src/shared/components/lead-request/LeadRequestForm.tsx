import { useId, useState } from 'react'

import { LegalConsentLabel } from '@/shared/components/legal/LegalConsentLabel'

const inputClassName =
  'type-input h-12 w-full rounded-[5px] border border-accent-alt/20 bg-white px-4 text-accent-alt placeholder:text-accent-alt/45 focus:border-accent focus:outline-none'

export interface LeadRequestFormConfig {
  formIdPrefix: string
  namePlaceholder: string
  phonePlaceholder: string
  messagePlaceholder: string
  submitLabel: string
  successTitle: string
  successText: string
}

interface LeadRequestFormProps {
  config: LeadRequestFormConfig
  onSuccess?: () => void
}

export function LeadRequestForm({ config, onSuccess }: LeadRequestFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const policyCheckboxId = useId()

  const canSubmit = isPolicyAccepted && phone.trim().length > 0
  const nameId = `${config.formIdPrefix}-name`
  const phoneId = `${config.formIdPrefix}-phone`
  const messageId = `${config.formIdPrefix}-message`

  if (isSubmitted) {
    return (
      <div className="grid gap-3 py-2 text-center min-[481px]:py-4">
        <p className="type-heading type-heading-tight uppercase text-accent-alt">
          {config.successTitle}
        </p>
        <p className="type-body text-accent-alt/80">{config.successText}</p>
      </div>
    )
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        if (!canSubmit) return
        setIsSubmitted(true)
        onSuccess?.()
      }}
    >
      <label className="sr-only" htmlFor={nameId}>
        {config.namePlaceholder}
      </label>
      <input
        className={inputClassName}
        id={nameId}
        name="name"
        onChange={(event) => setName(event.target.value)}
        placeholder={config.namePlaceholder}
        type="text"
        value={name}
      />

      <label className="sr-only" htmlFor={phoneId}>
        {config.phonePlaceholder}
      </label>
      <input
        className={inputClassName}
        id={phoneId}
        name="phone"
        onChange={(event) => setPhone(event.target.value)}
        placeholder={config.phonePlaceholder}
        required
        type="tel"
        value={phone}
      />

      <label className="sr-only" htmlFor={messageId}>
        {config.messagePlaceholder}
      </label>
      <textarea
        className={`${inputClassName} min-h-[96px] resize-y py-3`}
        id={messageId}
        name="message"
        onChange={(event) => setMessage(event.target.value)}
        placeholder={config.messagePlaceholder}
        rows={3}
        value={message}
      />

      <div className="flex items-start gap-2.5">
        <input
          checked={isPolicyAccepted}
          className="ui-checkbox ui-checkbox--on-light"
          id={policyCheckboxId}
          name="policy"
          onChange={(event) => setIsPolicyAccepted(event.target.checked)}
          type="checkbox"
        />
        <label className="text-xs! type-helper text-accent-alt/70" htmlFor={policyCheckboxId}>
          <LegalConsentLabel />
        </label>
      </div>

      <button
        className="type-button mt-2 inline-flex h-[43px] w-full items-center justify-center rounded-[5px] bg-accent px-6 text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 min-[481px]:mt-4 min-[481px]:h-[50px]"
        disabled={!canSubmit}
        type="submit"
      >
        {config.submitLabel}
      </button>
    </form>
  )
}
