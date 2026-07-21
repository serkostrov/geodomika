import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { LeadRequestDialog } from '@/shared/components/lead-request'
import { useLeadRequestDialog } from '@/shared/hooks/use-lead-request-dialog'

import { WINTER_SEASON_CTA_HREF, WINTER_SEASON_CTA_LABEL } from '../constants/content'
import {
  WINTER_SEASON_LEAD_DIALOG_SUBTITLE,
  WINTER_SEASON_LEAD_DIALOG_TITLE,
  WINTER_SEASON_LEAD_FORM,
} from '../constants/lead-request'

export function WinterSeasonCta() {
  const leadDialog = useLeadRequestDialog(WINTER_SEASON_CTA_HREF)

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          className="inline-flex h-[43px] flex-1 items-center justify-center rounded-[5px] bg-surface-warm px-6 type-button text-accent-alt transition-colors hover:bg-cream min-[481px]:h-[50px] min-[481px]:px-8"
          type="button"
          onClick={leadDialog.open}
        >
          {WINTER_SEASON_CTA_LABEL}
        </button>
        <button
          aria-label={WINTER_SEASON_CTA_LABEL}
          className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-surface-warm text-accent-alt transition-colors hover:bg-cream min-[481px]:size-[50px]"
          type="button"
          onClick={leadDialog.open}
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

      <LeadRequestDialog
        formConfig={WINTER_SEASON_LEAD_FORM}
        isOpen={leadDialog.isOpen}
        subtitle={WINTER_SEASON_LEAD_DIALOG_SUBTITLE}
        title={WINTER_SEASON_LEAD_DIALOG_TITLE}
        onClose={leadDialog.close}
      />
    </>
  )
}
