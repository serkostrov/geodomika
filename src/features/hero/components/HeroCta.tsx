import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import croppedArrowRightIcon from '@/assets/icons/hero/cropped-arrow-right.svg'
import { LeadRequestDialog } from '@/shared/components/lead-request'
import { useLeadRequestDialog } from '@/shared/hooks/use-lead-request-dialog'

import {
  ESTIMATE_REQUEST_DIALOG_SUBTITLE,
  ESTIMATE_REQUEST_DIALOG_TITLE,
  ESTIMATE_REQUEST_FORM,
} from '../constants/estimate-request'
import {
  PRODUCTION_TERMS_DIALOG_SUBTITLE,
  PRODUCTION_TERMS_DIALOG_TITLE,
  PRODUCTION_TERMS_FORM,
} from '../constants/production-terms-request'

const ESTIMATE_HASH = '#estimate'
const TERMS_HASH = '#terms'

export function HeroCta() {
  const estimateDialog = useLeadRequestDialog(ESTIMATE_HASH)
  const termsDialog = useLeadRequestDialog(TERMS_HASH)

  return (
    <>
      <div className="flex flex-col items-start gap-5 min-[721px]:flex-row min-[721px]:flex-wrap min-[721px]:items-center min-[721px]:gap-8 min-[1101px]:flex-nowrap">
        <div className="flex w-full items-center gap-2 min-[721px]:w-auto">
          <button
            className="inline-flex h-[43px] flex-1 items-center justify-center rounded-[5px] bg-cream px-6 type-button text-accent-alt transition-colors hover:bg-white min-[481px]:h-[57px] min-[481px]:px-8"
            type="button"
            onClick={estimateDialog.open}
          >
            Получить точную смету
          </button>
          <button
            aria-label="Получить точную смету"
            className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-[5px] bg-cream text-accent-alt transition-colors hover:bg-white min-[481px]:size-[57px]"
            type="button"
            onClick={estimateDialog.open}
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

        <button
          className="type-button inline-flex w-full items-center gap-2 text-white transition-opacity hover:opacity-80 min-[721px]:w-auto"
          type="button"
          onClick={termsDialog.open}
        >
          <span className="underline decoration-[1.5px] underline-offset-[5px]">
            Узнать возможные сроки производства
          </span>
          <img
            alt=""
            aria-hidden="true"
            className="h-[9px] w-[7px]"
            height={9}
            src={croppedArrowRightIcon}
            width={7}
          />
        </button>
      </div>

      <LeadRequestDialog
        formConfig={ESTIMATE_REQUEST_FORM}
        isOpen={estimateDialog.isOpen}
        subtitle={ESTIMATE_REQUEST_DIALOG_SUBTITLE}
        title={ESTIMATE_REQUEST_DIALOG_TITLE}
        onClose={estimateDialog.close}
      />

      <LeadRequestDialog
        formConfig={PRODUCTION_TERMS_FORM}
        isOpen={termsDialog.isOpen}
        subtitle={PRODUCTION_TERMS_DIALOG_SUBTITLE}
        title={PRODUCTION_TERMS_DIALOG_TITLE}
        onClose={termsDialog.close}
      />
    </>
  )
}
