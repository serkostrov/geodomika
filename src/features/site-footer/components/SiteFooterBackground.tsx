import footerBackground from '@/assets/images/site-footer/background-illustration.webp'

export function SiteFooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[1024/293] w-full"
    >
      <img
        alt=""
        className="size-full object-cover object-bottom brightness-[3] contrast-125 mix-blend-lighten"
        decoding="async"
        height={293}
        loading="lazy"
        src={footerBackground}
        width={1024}
      />
    </div>
  )
}
