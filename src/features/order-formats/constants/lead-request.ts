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

import type { LeadRequestFormConfig } from '@/shared/components/lead-request'

export type OrderFormatsLeadId = 'kit' | 'assembly' | 'turnkey'

export interface OrderFormatsLeadDialogConfig {
  title: string
  subtitle: string
  form: LeadRequestFormConfig
  hash: string
}

const sharedFormFields = {
  namePlaceholder: LEAD_REQUEST_NAME_PLACEHOLDER,
  phonePlaceholder: LEAD_REQUEST_PHONE_PLACEHOLDER,
  policyTextBefore: LEAD_REQUEST_POLICY_TEXT_BEFORE,
  policyLinkText: LEAD_REQUEST_POLICY_LINK_TEXT,
  policyHref: LEAD_REQUEST_POLICY_HREF,
  submitLabel: LEAD_REQUEST_SUBMIT_LABEL,
  successTitle: LEAD_REQUEST_SUCCESS_TITLE,
  successText: LEAD_REQUEST_SUCCESS_TEXT,
}

export const ORDER_FORMATS_LEAD_DIALOGS: Record<
  OrderFormatsLeadId,
  OrderFormatsLeadDialogConfig
> = {
  kit: {
    hash: '#price-kit',
    title: 'Цена домокомплекта',
    subtitle: 'Оставьте контакты — рассчитаем стоимость домокомплекта под ваш купол',
    form: {
      ...sharedFormFields,
      formIdPrefix: 'order-formats-kit-lead',
      messagePlaceholder: 'Модель или площадь (необязательно)',
    },
  },
  assembly: {
    hash: '#price-assembly',
    title: 'Цена со сборкой',
    subtitle: 'Оставьте контакты — подготовим расчёт формата «Со сборкой»',
    form: {
      ...sharedFormFields,
      formIdPrefix: 'order-formats-assembly-lead',
      messagePlaceholder: 'Модель или площадь (необязательно)',
    },
  },
  turnkey: {
    hash: '#price-turnkey',
    title: 'Цена под ключ',
    subtitle: 'Оставьте контакты — подготовим расчёт купола «Под ключ»',
    form: {
      ...sharedFormFields,
      formIdPrefix: 'order-formats-turnkey-lead',
      messagePlaceholder: 'Модель или задача (необязательно)',
    },
  },
}
