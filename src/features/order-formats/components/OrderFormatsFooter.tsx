import { useCallback, useEffect, useState } from 'react'

import { LeadRequestDialog } from '@/shared/components/lead-request'

import {
  ORDER_FORMATS_CTA_LINKS,
  ORDER_FORMATS_EXCLUDED_ITEMS,
  ORDER_FORMATS_EXCLUDED_TITLE,
  ORDER_FORMATS_FOOTNOTE,
  ORDER_FORMATS_PREPARE_TEXT,
} from '../constants/content'
import {
  ORDER_FORMATS_LEAD_DIALOGS,
  type OrderFormatsLeadId,
} from '../constants/lead-request'

function clearHash(hash: string) {
  if (window.location.hash !== hash) return
  const url = `${window.location.pathname}${window.location.search}`
  window.history.replaceState(null, '', url)
}

export function OrderFormatsFooter() {
  const [activeLeadId, setActiveLeadId] = useState<OrderFormatsLeadId | null>(null)

  const openLead = useCallback((id: OrderFormatsLeadId) => {
    setActiveLeadId(id)
  }, [])

  const closeLead = useCallback(() => {
    if (activeLeadId) {
      clearHash(ORDER_FORMATS_LEAD_DIALOGS[activeLeadId].hash)
    }
    setActiveLeadId(null)
  }, [activeLeadId])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash
      const match = (Object.keys(ORDER_FORMATS_LEAD_DIALOGS) as OrderFormatsLeadId[]).find(
        (id) => ORDER_FORMATS_LEAD_DIALOGS[id].hash === hash,
      )
      if (match) setActiveLeadId(match)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)

    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const activeDialog = activeLeadId ? ORDER_FORMATS_LEAD_DIALOGS[activeLeadId] : null

  return (
    <>
      <footer className="space-cta grid gap-6">
        <div className="grid gap-4 min-[861px]:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1fr))] min-[861px]:gap-x-4 min-[861px]:gap-y-0">
          <p className="type-caption max-w-[400px] text-accent-alt">
            {ORDER_FORMATS_FOOTNOTE}
          </p>

          {ORDER_FORMATS_CTA_LINKS.map((link) => (
            <button
              key={link.id}
              className="type-caption inline-flex items-center gap-2 text-left text-accent-alt transition-opacity hover:opacity-80"
              type="button"
              onClick={() => openLead(link.id)}
            >
              <span className="underline underline-offset-6">{link.label}</span>
              <span aria-hidden="true">&gt;</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 min-[861px]:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1fr))] min-[861px]:gap-x-4 min-[1200px]:gap-y-8">
          <div className="min-[861px]:col-start-2">
            <p className="type-caption mb-2 font-semibold text-accent-alt">
              {ORDER_FORMATS_EXCLUDED_TITLE}
            </p>
            <ul className="type-caption grid gap-1 text-accent-alt">
              {ORDER_FORMATS_EXCLUDED_ITEMS.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="min-[861px]:col-span-2 min-[861px]:col-start-3">
            <p className="type-caption max-w-[250px] text-accent-alt">
              <span dangerouslySetInnerHTML={{ __html: ORDER_FORMATS_PREPARE_TEXT }} />
            </p>
          </div>
        </div>
      </footer>

      {activeDialog ? (
        <LeadRequestDialog
          formConfig={activeDialog.form}
          isOpen={activeLeadId !== null}
          subtitle={activeDialog.subtitle}
          title={activeDialog.title}
          onClose={closeLead}
        />
      ) : null}
    </>
  )
}
