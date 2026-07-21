import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'

import arrowLeftIcon from '@/assets/icons/hero/arrow-left.svg'
import arrowRightIcon from '@/assets/icons/hero/arrow-right.svg'
import { cn } from '@/shared/lib/cn'

import { MODELS_PRICING_GALLERY_SLIDES, type ModelsPricingGallerySlide } from '../constants/gallery'

const SCROLL_EDGE_OFFSET = 2

function shuffleArray<T>(input: T[]) {
  const arr = input.slice()

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

function interleaveByTheme(slides: ModelsPricingGallerySlide[]) {
  const groups = new Map<ModelsPricingGallerySlide['theme'], ModelsPricingGallerySlide[]>()
  for (const slide of slides) {
    const list = groups.get(slide.theme)
    if (list) list.push(slide)
    else groups.set(slide.theme, [slide])
  }

  const themes = shuffleArray(Array.from(groups.keys()))
  const queues = themes.map((theme) => shuffleArray(groups.get(theme) ?? []))
  const result: ModelsPricingGallerySlide[] = []

  while (result.length < slides.length) {
    let pushed = false

    for (let i = 0; i < queues.length; i += 1) {
      const queue = queues[i]
      const next = queue.shift()
      if (next) {
        result.push(next)
        pushed = true
      }
    }

    if (!pushed) break
  }

  return result
}

function measureLoopWidth(container: HTMLDivElement, slideCount: number) {
  const first = container.children[0] as HTMLElement | undefined
  const firstOfSecondLoop = container.children[slideCount] as HTMLElement | undefined
  if (!first || !firstOfSecondLoop) return 0
  return firstOfSecondLoop.offsetLeft - first.offsetLeft
}

export function ModelsPricingGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const loopWidthRef = useRef(0)
  const isAdjustingScrollRef = useRef(false)

  const orderedSlides = useMemo(
    () => interleaveByTheme(MODELS_PRICING_GALLERY_SLIDES),
    [],
  )

  const loopedSlides = useMemo(
    () =>
      [...orderedSlides, ...orderedSlides].map((slide, index) => ({
        ...slide,
        uid: `${slide.id}-loop-${index}`,
      })),
    [orderedSlides],
  )

  const slideCount = orderedSlides.length

  const syncLoopWidth = useCallback(() => {
    const container = scrollRef.current
    if (!container || slideCount === 0) return

    const nextLoopWidth = measureLoopWidth(container, slideCount)
    if (nextLoopWidth <= 0) return

    loopWidthRef.current = nextLoopWidth
  }, [slideCount])

  const normalizeScrollPosition = useCallback(() => {
    if (isAdjustingScrollRef.current) return

    const container = scrollRef.current
    const loopWidth = loopWidthRef.current
    if (!container || loopWidth <= 0) return

    if (container.scrollLeft >= loopWidth - SCROLL_EDGE_OFFSET) {
      isAdjustingScrollRef.current = true
      container.scrollLeft -= loopWidth
      requestAnimationFrame(() => {
        isAdjustingScrollRef.current = false
      })
    }
  }, [])

  useLayoutEffect(() => {
    syncLoopWidth()
  }, [syncLoopWidth, loopedSlides])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const onScroll = () => {
      normalizeScrollPosition()
    }

    container.addEventListener('scroll', onScroll, { passive: true })

    const resizeObserver = new ResizeObserver(() => {
      syncLoopWidth()
    })
    resizeObserver.observe(container)

    return () => {
      container.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
    }
  }, [normalizeScrollPosition, syncLoopWidth])

  const scrollByStep = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    const loopWidth = loopWidthRef.current
    if (!container || loopWidth <= 0) return

    const step = Math.max(container.clientWidth * 0.55, 300)

    if (direction === 'left' && container.scrollLeft <= SCROLL_EDGE_OFFSET) {
      isAdjustingScrollRef.current = true
      container.scrollLeft += loopWidth

      requestAnimationFrame(() => {
        container.scrollBy({
          left: -step,
          behavior: 'smooth',
        })

        const releaseScrollLock = () => {
          isAdjustingScrollRef.current = false
        }

        if ('onscrollend' in container) {
          container.addEventListener('scrollend', releaseScrollLock, { once: true })
        } else {
          globalThis.setTimeout(releaseScrollLock, 450)
        }
      })
      return
    }

    container.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col gap-4 min-[1200px]:gap-6">
      <div
        ref={scrollRef}
        className="-mx-5 flex items-center gap-2 self-start overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] scrollbar-none min-[721px]:gap-3 min-[1200px]:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {loopedSlides.map((slide) => (
          <img
            key={slide.uid}
            alt={slide.imageAlt}
            className={cn(
              'w-auto shrink-0 rounded-[5px] object-cover',
              slide.heightClassName,
            )}
            loading="lazy"
            onLoad={syncLoopWidth}
            src={slide.imageSrc}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <button
          aria-label="Предыдущее фото"
          className="inline-flex size-[42px] items-center justify-center rounded-[5px] bg-accent text-white transition-colors hover:bg-accent-hover"
          onClick={() => scrollByStep('left')}
          type="button"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-3.5 w-4 brightness-0 invert"
            height={14}
            src={arrowLeftIcon}
            width={16}
          />
        </button>
        <button
          aria-label="Следующее фото"
          className="inline-flex size-[42px] items-center justify-center rounded-[5px] bg-accent text-white transition-colors hover:bg-accent-hover"
          onClick={() => scrollByStep('right')}
          type="button"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-3.5 w-4 brightness-0 invert"
            height={14}
            src={arrowRightIcon}
            width={16}
          />
        </button>
      </div>
    </div>
  )
}
