function normalizeHash(hash: string): string {
  return hash.startsWith('#') ? hash.slice(1) : hash
}

function waitForNextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

const SCROLL_MARGIN_PX = 16

export async function navigateToSection(hash: string): Promise<void> {
  const id = normalizeHash(hash)
  if (!id) return

  const nextHash = `#${id}`
  if (window.location.hash !== nextHash) {
    history.pushState(null, '', nextHash)
  }

  await waitForNextPaint()

  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_MARGIN_PX
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({
    top: Math.max(0, top),
    behavior: reducedMotion ? 'auto' : 'smooth',
  })
}

export function handleSectionLinkClick(
  event: {
    currentTarget: EventTarget & { getAttribute(name: string): string | null }
    preventDefault(): void
  },
): void {
  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#') || href.length < 2) return

  event.preventDefault()
  void navigateToSection(href)
}
