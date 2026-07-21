import { useId, useState } from 'react'

import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'

import {
  TEST_NIGHT_PHONE_PLACEHOLDER,
  TEST_NIGHT_POLICY_HREF,
  TEST_NIGHT_POLICY_LINK_TEXT,
  TEST_NIGHT_POLICY_TEXT_BEFORE,
  TEST_NIGHT_SUBMIT_LABEL,
} from '../constants/content'

import { TestNightSocialRow } from './TestNightSocialRow'

export function TestNightForm() {
  const [phone, setPhone] = useState('')
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false)
  const policyCheckboxId = useId()

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <label className="sr-only" htmlFor="test-night-phone">
        {TEST_NIGHT_PHONE_PLACEHOLDER}
      </label>
      <input
        className="type-input h-12 w-full rounded-[5px] border border-white/30 bg-transparent px-4 text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        id="test-night-phone"
        name="phone"
        onChange={(event) => setPhone(event.target.value)}
        placeholder={TEST_NIGHT_PHONE_PLACEHOLDER}
        type="tel"
        value={phone}
      />

      <div className="flex items-start gap-2.5">
        <input
          checked={isPolicyAccepted}
          className="ui-checkbox ui-checkbox--on-dark"
          id={policyCheckboxId}
          name="policy"
          onChange={(event) => setIsPolicyAccepted(event.target.checked)}
          type="checkbox"
        />
        <label
          className="text-xs! type-helper text-white/70"
          htmlFor={policyCheckboxId}
        >
          {TEST_NIGHT_POLICY_TEXT_BEFORE}
          <a
            className="type-link decoration-white/50"
            href={TEST_NIGHT_POLICY_HREF}
          >
            {TEST_NIGHT_POLICY_LINK_TEXT}
          </a>
        </label>
      </div>

      <div className="mt-4 flex items-center gap-2 min-[481px]:mt-6 min-[481px]:gap-3">
        <button
          className="type-button inline-flex h-[43px] items-center justify-center rounded-[5px] bg-cream px-5 text-accent-alt transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 min-[481px]:h-[50px] min-[481px]:px-8"
          disabled={!isPolicyAccepted}
          type="submit"
        >
          {TEST_NIGHT_SUBMIT_LABEL}
        </button>
        <button
          aria-label={TEST_NIGHT_SUBMIT_LABEL}
          className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-cream text-accent-alt transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 min-[481px]:size-[50px]"
          disabled={!isPolicyAccepted}
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
