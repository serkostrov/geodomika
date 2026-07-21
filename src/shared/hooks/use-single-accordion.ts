import { useCallback, useState } from 'react'

export function useSingleAccordion(initialOpenId: string | null = null) {
  const [openId, setOpenId] = useState<string | null>(initialOpenId)

  const toggle = useCallback((id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id))
  }, [])

  const isOpen = useCallback((id: string) => openId === id, [openId])

  return {
    openId,
    toggle,
    isOpen,
  }
}
