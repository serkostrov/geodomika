import type { ReactNode } from 'react'

export function TechnologyAccordionBulletList({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ul className="grid gap-2 pb-4 min-[721px]:gap-3 min-[721px]:pb-6 min-[1200px]:pb-8">
      {children}
    </ul>
  )
}

export function TechnologyAccordionBulletItem({
  children,
}: {
  children: ReactNode
}) {
  return (
    <li className="type-body relative pl-5 text-accent-alt">
      <span
        aria-hidden="true"
        className="absolute top-[0.6em] left-1 size-[5px] rounded-full bg-current"
      />
      {children}
    </li>
  )
}

export function TechnologyAccordionParagraph({
  children,
}: {
  children: ReactNode
}) {
  return (
    <p className="type-body max-w-full pb-4 text-accent-alt min-[721px]:max-w-[90%] min-[721px]:pb-6 min-[1200px]:pb-8">
      {children}
    </p>
  )
}
