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

export const ESTIMATE_REQUEST_DIALOG_TITLE = 'Получить точную смету' as const

export const ESTIMATE_REQUEST_DIALOG_SUBTITLE =
  'Оставьте контакты — рассчитаем стоимость под вашу задачу и перезвоним' as const

export const ESTIMATE_REQUEST_MESSAGE_PLACEHOLDER =
  'Комментарий (необязательно)' as const

export const ESTIMATE_REQUEST_FORM = {
  formIdPrefix: 'estimate-request',
  namePlaceholder: LEAD_REQUEST_NAME_PLACEHOLDER,
  phonePlaceholder: LEAD_REQUEST_PHONE_PLACEHOLDER,
  messagePlaceholder: ESTIMATE_REQUEST_MESSAGE_PLACEHOLDER,
  policyTextBefore: LEAD_REQUEST_POLICY_TEXT_BEFORE,
  policyLinkText: LEAD_REQUEST_POLICY_LINK_TEXT,
  policyHref: LEAD_REQUEST_POLICY_HREF,
  submitLabel: LEAD_REQUEST_SUBMIT_LABEL,
  successTitle: LEAD_REQUEST_SUCCESS_TITLE,
  successText: LEAD_REQUEST_SUCCESS_TEXT,
} as const
