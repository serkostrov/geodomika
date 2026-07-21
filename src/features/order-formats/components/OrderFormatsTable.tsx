import {
  ORDER_FORMATS_FEATURE_COLUMN,
  ORDER_FORMATS_PACKAGES,
} from '../constants/content'
import { ORDER_FORMATS_TABLE_GROUPS } from '../constants/table'

import { OrderFormatsFooter } from './OrderFormatsFooter'
import { OrderFormatsMobileTable } from './OrderFormatsMobileTable'
import { OrderFormatsTableGroup } from './OrderFormatsTableGroup'

export function OrderFormatsTable() {
  return (
    <div>
      <OrderFormatsMobileTable />

      <div className="hidden overflow-x-auto [-ms-overflow-style:none] scrollbar-none min-[861px]:block [&::-webkit-scrollbar]:hidden">
        <div>
          <div className="order-formats-table-header mb-2 grid grid-cols-[minmax(0,2fr)_repeat(3,minmax(72px,1fr))] gap-x-3 min-[861px]:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1fr))] min-[861px]:gap-x-4">
            <p className="type-subheading text-accent-alt">
              {ORDER_FORMATS_FEATURE_COLUMN}
            </p>
            {ORDER_FORMATS_PACKAGES.map((packageName) => (
              <p
                key={packageName}
                className="type-subheading text-center text-accent-alt"
              >
                {packageName}
              </p>
            ))}
          </div>

          <div className="grid gap-1">
            {ORDER_FORMATS_TABLE_GROUPS.map((group) => (
              <OrderFormatsTableGroup key={group.id} group={group} />
            ))}
          </div>
        </div>
      </div>

      <OrderFormatsFooter />
    </div>
  )
}
