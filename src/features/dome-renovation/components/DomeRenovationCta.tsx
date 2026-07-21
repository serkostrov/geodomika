import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { LeadRequestDialog } from '@/shared/components/lead-request'
import { useLeadRequestDialog } from '@/shared/hooks/use-lead-request-dialog'
import { cn } from '@/shared/lib/cn'

import {
  DOME_RENOVATION_CTA_DESCRIPTION,
  DOME_RENOVATION_CTA_HREF,
  DOME_RENOVATION_CTA_LABEL,
} from '../constants/content'
import {
  DOME_RENOVATION_LEAD_DIALOG_SUBTITLE,
  DOME_RENOVATION_LEAD_DIALOG_TITLE,
  DOME_RENOVATION_LEAD_FORM,
} from '../constants/lead-request'

interface DomeRenovationCtaProps {
  variant?: 'desktop' | 'mobile'
}

export function DomeRenovationCta({ variant = 'desktop' }: DomeRenovationCtaProps) {
  const isMobile = variant === 'mobile'
  const leadDialog = useLeadRequestDialog(DOME_RENOVATION_CTA_HREF)

  return (
    <>
      <div
        className={cn(
          'relative z-10 w-full',
          !isMobile && 'max-w-[460px] min-[1200px]:max-w-[520px]',
        )}
      >
        <p
          className={cn(
            'type-subheading max-w-none space-cta-copy font-normal leading-snug text-accent-alt min-[1200px]:text-[20px] min-[1200px]:leading-[1.35]',
            isMobile && 'text-center',
          )}
        >
          {DOME_RENOVATION_CTA_DESCRIPTION}
        </p>

        <div className={cn('flex items-center gap-2', isMobile && 'px-0')}>
          <button
            className="inline-flex h-[43px] flex-1 items-center justify-center rounded-[5px] bg-accent px-4 type-button text-white transition-colors hover:bg-accent-hover min-[481px]:h-[50px] min-[481px]:px-6"
            type="button"
            onClick={leadDialog.open}
          >
            {DOME_RENOVATION_CTA_LABEL}
          </button>
          <button
            aria-label={DOME_RENOVATION_CTA_LABEL}
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
        formConfig={DOME_RENOVATION_LEAD_FORM}
        isOpen={leadDialog.isOpen}
        subtitle={DOME_RENOVATION_LEAD_DIALOG_SUBTITLE}
        title={DOME_RENOVATION_LEAD_DIALOG_TITLE}
        onClose={leadDialog.close}
      />
    </>
  )
}
