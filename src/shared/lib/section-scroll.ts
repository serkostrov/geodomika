type SectionLoader = () => Promise<void>

const loaders = new Map<string, SectionLoader>()

export function registerSectionLoader(id: string, load: SectionLoader): () => void {
  loaders.set(id, load)
  return () => {
    loaders.delete(id)
  }
}

function normalizeHash(hash: string): string {
  return hash.startsWith('#') ? hash.slice(1) : hash
}

export function isRegisteredSection(hash: string): boolean {
  const id = normalizeHash(hash)
  return Boolean(id) && loaders.has(id)
}

async function loadAllSections(): Promise<void> {
  await Promise.allSettled([...loaders.values()].map((load) => load()))
}

function waitForNextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, ms)
  })
}

const SCROLL_MARGIN_PX = 16

/**
 * Догружает все ленивые секции (чтобы высоты выше цели были верными),
 * затем скроллит к якорю. Работает одинаково на любом экране.
 */
export async function navigateToSection(hash: string): Promise<void> {
  const id = normalizeHash(hash)
  if (!id || !loaders.has(id)) return

  const nextHash = `#${id}`
  if (window.location.hash !== nextHash) {
    history.pushState(null, '', nextHash)
  }

  try {
    await loadAllSections()
  } catch {
    // Секции, которые упали при загрузке, пропускаем — скроллим к тому что есть
  }

  // Даём React отрисовать секции и стабилизировать высоты
  await waitForNextPaint()
  await wait(50)
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
  if (!href?.startsWith('#')) return
  if (!isRegisteredSection(href)) return

  event.preventDefault()
  void navigateToSection(href)
}
