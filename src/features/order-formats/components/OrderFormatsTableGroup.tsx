import type { OrderFormatTableGroup } from '../constants/table'

import { OrderFormatsTableRowComponent } from './OrderFormatsTableRow'

interface OrderFormatsTableGroupProps {
  group: OrderFormatTableGroup
}

export function OrderFormatsTableGroup({ group }: OrderFormatsTableGroupProps) {
  return (
    <div className="grid">
      <div className="bg-surface-muted px-4 py-3 min-[1200px]:py-4">
        <p className="type-subheading text-accent-alt">
          {group.title}
        </p>
      </div>

      <div className="divide-y divide-surface-muted/70">
        {group.rows.map((row) => (
          <OrderFormatsTableRowComponent key={row.id} row={row} />
        ))}
      </div>
    </div>
  )
}
