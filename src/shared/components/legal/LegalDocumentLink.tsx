import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/shared/lib/cn'

interface LegalDocumentLinkProps {
  children: ReactNode
  className?: string
  to: string
}

export function LegalDocumentLink({ children, className, to }: LegalDocumentLinkProps) {
  return (
    <Link
      className={cn(className)}
      rel="noopener noreferrer"
      target="_blank"
      to={to}
    >
      {children}
    </Link>
  )
}
