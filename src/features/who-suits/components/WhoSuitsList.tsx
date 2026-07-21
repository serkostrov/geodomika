interface WhoSuitsListProps {
  items: readonly string[]
}

export function WhoSuitsList({ items }: WhoSuitsListProps) {
  return (
    <ul className="divide-y divide-border-muted">
      {items.map((item) => (
        <li
          key={item}
          className="type-body py-1 text-accent-alt first:pt-0 last:pb-0"
        >
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}
