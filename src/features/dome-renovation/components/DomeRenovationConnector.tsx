import arrowLeftIcon from '@/assets/icons/hero/arrow-left.svg'
import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { cn } from '@/shared/lib/cn'

interface DomeRenovationConnectorProps {
  direction: 'left' | 'right'
  className?: string
}

export function DomeRenovationConnector({
  direction,
  className,
}: DomeRenovationConnectorProps) {
  const arrowBox = (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-[4px] border border-accent/25 bg-surface-warm">
      <img
        alt=""
        aria-hidden="true"
        className="h-3.5 w-4"
        height={14}
        src={direction === 'left' ? arrowLeftIcon : arrowRightIcon}
        width={16}
      />
    </span>
  )

  const line = (
    <span className="h-px min-w-0 flex-1 border-t border-dashed border-border-muted" />
  )

  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex min-w-0 flex-1 items-center self-center',
        className,
      )}
    >
      {direction === 'left' ? (
        <>
          {arrowBox}
          {line}
        </>
      ) : (
        <>
          {line}
          {arrowBox}
        </>
      )}
    </div>
  )
}
