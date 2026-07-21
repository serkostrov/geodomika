import {
  LEAD_REQUEST_NAME_PLACEHOLDER,
  LEAD_REQUEST_PHONE_PLACEHOLDER,
  LEAD_REQUEST_POLICY_HREF,
  LEAD_REQUEST_POLICY_LINK_TEXT,
  LEAD_REQUEST_POLICY_TEXT_BEFORE,
  LEAD_REQUEST_SUBMIT_LABEL,
  LEAD_REQUEST_SUCCESS_TEXT,
  LEAD_REQUEST_SUCCESS_TITLE,
} from '@/shared/constants/lead-request'

export const DOME_RENOVATION_LEAD_DIALOG_TITLE = 'Стоимость реновации' as const

export const DOME_RENOVATION_LEAD_DIALOG_SUBTITLE =
  'Оставьте контакты — оценим замену шатра на купол на вашем объекте' as const

export const DOME_RENOVATION_LEAD_MESSAGE_PLACEHOLDER =
  'Адрес или описание объекта (необязательно)' as const

export const DOME_RENOVATION_LEAD_FORM = {
  formIdPrefix: 'dome-renovation-lead',
  namePlaceholder: LEAD_REQUEST_NAME_PLACEHOLDER,
  phonePlaceholder: LEAD_REQUEST_PHONE_PLACEHOLDER,
  messagePlaceholder: DOME_RENOVATION_LEAD_MESSAGE_PLACEHOLDER,
  policyTextBefore: LEAD_REQUEST_POLICY_TEXT_BEFORE,
  policyLinkText: LEAD_REQUEST_POLICY_LINK_TEXT,
  policyHref: LEAD_REQUEST_POLICY_HREF,
  submitLabel: LEAD_REQUEST_SUBMIT_LABEL,
  successTitle: LEAD_REQUEST_SUCCESS_TITLE,
  successText: LEAD_REQUEST_SUCCESS_TEXT,
} as const
