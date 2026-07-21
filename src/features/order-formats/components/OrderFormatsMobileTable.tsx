import { ORDER_FORMATS_PACKAGES } from '../constants/content'
import type { OrderFormatPackageKey } from '../constants/table'
import { ORDER_FORMATS_TABLE_GROUPS } from '../constants/table'

import { OrderFormatsStatusIcon } from './OrderFormatsStatusIcon'

const PACKAGE_KEYS: OrderFormatPackageKey[] = ['kit', 'assembly', 'turnkey']

const MOBILE_PACKAGE_LABELS = ['Комплект', 'Сборка', 'Ключ'] as const

export function OrderFormatsMobileTable() {
  return (
    <div className="min-[861px]:hidden">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col />
          <col className="w-16" />
          <col className="w-16" />
          <col className="w-16" />
        </colgroup>

        <thead>
          <tr className="border-b border-accent-alt/16">
            <th className="p-0 pb-2 text-left" scope="col" />
            {MOBILE_PACKAGE_LABELS.map((label, index) => (
              <th
                key={label}
                className="type-caption p-0 pb-2 text-center font-medium leading-none text-accent-alt/70"
                scope="col"
                title={ORDER_FORMATS_PACKAGES[index]}
              >
                <span className="sr-only">{ORDER_FORMATS_PACKAGES[index]}</span>
                <span aria-hidden="true" className="whitespace-nowrap">
                  {label}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ORDER_FORMATS_TABLE_GROUPS.map((group) => (
            <FragmentGroup key={group.id} group={group} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FragmentGroup({
  group,
}: {
  group: (typeof ORDER_FORMATS_TABLE_GROUPS)[number]
}) {
  return (
    <>
      <tr>
        <th
          className="type-body border-b border-accent-alt/16 px-0 py-3 text-left !font-bold text-accent-alt"
          colSpan={4}
          scope="colgroup"
        >
          {group.title}
        </th>
      </tr>

      {group.rows.map((row) => (
        <tr key={row.id} className="border-b border-accent-alt/10">
          <td className="type-table px-0 py-2 pr-2 align-middle text-accent-alt">
            {row.label}
          </td>
          {PACKAGE_KEYS.map((key) => (
            <td key={key} className="px-0 py-2 text-center align-middle">
              <OrderFormatsStatusIcon status={row[key]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
