import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { LeadRequestDialog } from '@/shared/components/lead-request'
import { useLeadRequestDialog } from '@/shared/hooks/use-lead-request-dialog'

import {
  MODELS_PRICING_CTA_HREF,
  MODELS_PRICING_CTA_LABEL,
  MODELS_PRICING_CTA_TEXT,
} from '../constants/content'
import {
  MODELS_PRICING_LEAD_DIALOG_SUBTITLE,
  MODELS_PRICING_LEAD_DIALOG_TITLE,
  MODELS_PRICING_LEAD_FORM,
} from '../constants/lead-request'

export function ModelsPricingCta() {
  const leadDialog = useLeadRequestDialog(MODELS_PRICING_CTA_HREF)

  return (
    <>
      <div className="mx-auto grid max-w-[640px] justify-items-center gap-6 text-center">
        <p className="type-body max-w-[300px] text-accent-alt">
          {MODELS_PRICING_CTA_TEXT}
        </p>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-[43px] items-center justify-center rounded-[5px] bg-accent px-6 type-button text-white transition-colors hover:bg-accent-hover min-[481px]:h-[50px] min-[481px]:px-8"
            type="button"
            onClick={leadDialog.open}
          >
            {MODELS_PRICING_CTA_LABEL}
          </button>
          <button
            aria-label={MODELS_PRICING_CTA_LABEL}
            className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-accent text-white transition-colors hover:bg-accent-hover min-[481px]:size-[50px]"
            type="button"
            onClick={leadDialog.open}
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-3.5 w-4 brightness-0 invert"
              height={14}
              src={arrowRightIcon}
              width={16}
            />
          </button>
        </div>
      </div>

      <LeadRequestDialog
        formConfig={MODELS_PRICING_LEAD_FORM}
        isOpen={leadDialog.isOpen}
        subtitle={MODELS_PRICING_LEAD_DIALOG_SUBTITLE}
        title={MODELS_PRICING_LEAD_DIALOG_TITLE}
        onClose={leadDialog.close}
      />
    </>
  )
}
