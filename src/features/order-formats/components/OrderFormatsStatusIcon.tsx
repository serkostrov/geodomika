import checkIcon from '@/assets/icons/order-formats/check.svg'
import crossIcon from '@/assets/icons/order-formats/cross.svg'

import type { OrderFormatStatus } from '../constants/table'

interface OrderFormatsStatusIconProps {
  status: OrderFormatStatus
}

export function OrderFormatsStatusIcon({ status }: OrderFormatsStatusIconProps) {
  const isIncluded = status === 'included'

  return (
    <span className="inline-flex size-6 items-center justify-center" aria-hidden="true">
      <img
        alt=""
        className={isIncluded ? 'h-3 w-4' : 'size-3'}
        height={isIncluded ? 10 : 10}
        src={isIncluded ? checkIcon : crossIcon}
        width={isIncluded ? 14 : 10}
      />
      <span className="sr-only">{isIncluded ? 'Включено' : 'Не включено'}</span>
    </span>
  )
}
