import { Link } from 'react-router-dom'

import legalLogo from '@/assets/images/legal/logo-geodomika.svg'
import { cn } from '@/shared/lib/cn'

interface LegalPageHeaderProps {
  currentPage: string
  className?: string
}

export function LegalPageHeader({ currentPage, className }: LegalPageHeaderProps) {
  return (
    <header className={cn('grid gap-4 pb-6', className)}>
      <Link aria-label="Геодомика — на главную" className="inline-flex shrink-0" to="/">
        <img
          alt="Геодомика"
          className="h-auto w-[64px]"
          height={58}
          src={legalLogo}
          width={64}
        />
      </Link>

      <nav
        aria-label="Хлебные крошки"
        className="type-caption flex flex-wrap items-center gap-x-2 gap-y-1 text-legal-brand"
      >
        <Link className="transition-colors hover:text-legal-brand-hover" to="/">
          Главная
        </Link>
        <span aria-hidden="true" className="text-legal-brand/60">
          /
        </span>
        <span>{currentPage}</span>
      </nav>
    </header>
  )
}
