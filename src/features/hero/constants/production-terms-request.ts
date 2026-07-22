import {
  LEAD_REQUEST_NAME_PLACEHOLDER,
  LEAD_REQUEST_PHONE_PLACEHOLDER,
  LEAD_REQUEST_SUBMIT_LABEL,
  LEAD_REQUEST_SUCCESS_TEXT,
  LEAD_REQUEST_SUCCESS_TITLE,
} from '@/shared/constants/lead-request'

export const PRODUCTION_TERMS_DIALOG_TITLE = 'Сроки производства' as const

export const PRODUCTION_TERMS_DIALOG_SUBTITLE =
  'Оставьте контакты — подскажем сроки изготовления и монтажа под ваш проект' as const

export const PRODUCTION_TERMS_MESSAGE_PLACEHOLDER =
  'Модель или задача (необязательно)' as const

export const PRODUCTION_TERMS_FORM = {
  formIdPrefix: 'production-terms-request',
  namePlaceholder: LEAD_REQUEST_NAME_PLACEHOLDER,
  phonePlaceholder: LEAD_REQUEST_PHONE_PLACEHOLDER,
  messagePlaceholder: PRODUCTION_TERMS_MESSAGE_PLACEHOLDER,
  submitLabel: LEAD_REQUEST_SUBMIT_LABEL,
  successTitle: LEAD_REQUEST_SUCCESS_TITLE,
  successText: LEAD_REQUEST_SUCCESS_TEXT,
} as const
