import footerBackground from '@/assets/images/site-footer/background-illustration.png'

export function SiteFooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[1024/293] w-full"
    >
      <img
        alt=""
        className="size-full object-cover object-bottom brightness-[3] contrast-125 mix-blend-lighten"
        height={293}
        src={footerBackground}
        width={1024}
      />
    </div>
  )
}
