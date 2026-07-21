import { useCallback, useEffect, useState } from 'react'

function clearHash(hash: string) {
  if (window.location.hash !== hash) return
  const url = `${window.location.pathname}${window.location.search}`
  window.history.replaceState(null, '', url)
}

export function useLeadRequestDialog(hash?: string) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    if (hash) clearHash(hash)
  }, [hash])

  useEffect(() => {
    if (!hash) return

    const syncFromHash = () => {
      if (window.location.hash === hash) {
        setIsOpen(true)
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)

    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [hash])

  return { isOpen, open, close }
}
