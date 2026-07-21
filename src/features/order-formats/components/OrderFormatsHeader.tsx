import {
  ORDER_FORMATS_DESCRIPTION,
  ORDER_FORMATS_SECTION_LABEL,
  ORDER_FORMATS_TITLE_ACCENT,
  ORDER_FORMATS_TITLE_REST,
} from '../constants/content'

export function OrderFormatsHeader() {
  return (
    <header className="space-header">
      <p className="type-caption space-stack-label text-accent-alt min-[721px]:type-body">
        {ORDER_FORMATS_SECTION_LABEL}
      </p>

      <h2 className="type-heading space-stack-title max-w-[900px] uppercase">
        <span className="text-accent-alt">{ORDER_FORMATS_TITLE_REST}</span>
        <span className="text-accent">{ORDER_FORMATS_TITLE_ACCENT}</span>
      </h2>

      <p className="type-caption max-w-[500px] text-accent-alt min-[721px]:type-body">
        <span dangerouslySetInnerHTML={{ __html: ORDER_FORMATS_DESCRIPTION }} />
      </p>
    </header>
  )
}
