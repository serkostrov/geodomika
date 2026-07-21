import type { OrderFormatTableRow } from '../constants/table'

import { OrderFormatsStatusIcon } from './OrderFormatsStatusIcon'

interface OrderFormatsTableRowProps {
  row: OrderFormatTableRow
}

export function OrderFormatsTableRowComponent({ row }: OrderFormatsTableRowProps) {
  return (
    <div className="order-formats-table-row grid grid-cols-[minmax(0,2fr)_repeat(3,minmax(72px,1fr))] items-center gap-x-3 py-3 min-[861px]:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1fr))] min-[861px]:gap-x-4 min-[1200px]:py-4">
      <p className="type-table text-accent-alt">
        {row.label}
      </p>
      <div className="flex justify-center">
        <OrderFormatsStatusIcon status={row.kit} />
      </div>
      <div className="flex justify-center">
        <OrderFormatsStatusIcon status={row.assembly} />
      </div>
      <div className="flex justify-center">
        <OrderFormatsStatusIcon status={row.turnkey} />
      </div>
    </div>
  )
}
