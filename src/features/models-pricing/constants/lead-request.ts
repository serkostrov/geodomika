import {
  LEAD_REQUEST_NAME_PLACEHOLDER,
  LEAD_REQUEST_PHONE_PLACEHOLDER,
  LEAD_REQUEST_SUBMIT_LABEL,
  LEAD_REQUEST_SUCCESS_TEXT,
  LEAD_REQUEST_SUCCESS_TITLE,
} from '@/shared/constants/lead-request'

export const MODELS_PRICING_LEAD_DIALOG_TITLE = 'Уточнить детали' as const

export const MODELS_PRICING_LEAD_DIALOG_SUBTITLE =
  'Оставьте контакты — подберём модель и комплектацию под ваши задачи' as const

export const MODELS_PRICING_LEAD_MESSAGE_PLACEHOLDER =
  'Интересующая модель или задача (необязательно)' as const

export const MODELS_PRICING_LEAD_FORM = {
  formIdPrefix: 'models-pricing-lead',
  namePlaceholder: LEAD_REQUEST_NAME_PLACEHOLDER,
  phonePlaceholder: LEAD_REQUEST_PHONE_PLACEHOLDER,
  messagePlaceholder: MODELS_PRICING_LEAD_MESSAGE_PLACEHOLDER,
  submitLabel: LEAD_REQUEST_SUBMIT_LABEL,
  successTitle: LEAD_REQUEST_SUCCESS_TITLE,
  successText: LEAD_REQUEST_SUCCESS_TEXT,
} as const
