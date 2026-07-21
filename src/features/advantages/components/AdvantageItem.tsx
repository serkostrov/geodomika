import { cn } from '@/shared/lib/cn'

interface AdvantageIconProps {
  hasFrame: boolean
  src: string
}

export function AdvantageIcon({ hasFrame, src }: AdvantageIconProps) {
  if (hasFrame) {
    return (
      <img
        alt=""
        aria-hidden="true"
        className="size-10 shrink-0 min-[861px]:size-[45px]"
        height={45}
        src={src}
        width={45}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-[5px] border border-accent/20 min-[861px]:size-[45px]"
    >
      <img alt="" className="max-h-[20px] max-w-[20px] min-[861px]:max-h-[23px] min-[861px]:max-w-[23px]" height={23} src={src} width={23} />
    </div>
  )
}

interface AdvantageItemProps {
  className?: string
  description: string
  hasIconFrame: boolean
  iconSrc: string
  title: string
}

export function AdvantageItem({
  className,
  description,
  hasIconFrame,
  iconSrc,
  title,
}: AdvantageItemProps) {
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 px-0 py-4',
        'min-[861px]:flex min-[861px]:flex-col min-[861px]:items-start min-[861px]:gap-4 min-[861px]:p-6',
        'min-[1200px]:gap-5 min-[1200px]:p-8',
        className,
      )}
    >
      <AdvantageIcon hasFrame={hasIconFrame} src={iconSrc} />

      <h3 className="type-title text-accent-alt">
        {title}
      </h3>

      <p className="type-body col-span-2 text-accent-alt min-[861px]:col-auto">
        {description}
      </p>
    </article>
  )
}
