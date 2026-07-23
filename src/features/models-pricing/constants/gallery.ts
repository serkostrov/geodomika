export interface ModelsPricingGallerySlide {
  id: string
  imageSrc: string
  imageAlt: string
  theme:
    | 'exterior'
    | 'winter'
    | 'construction'
    | 'interior'
    | 'detail'
    | 'transport'
  heightClassName: string
}

const COMMON_HEIGHT_CLASS_NAME =
  'h-[220px] min-[721px]:h-[260px] min-[1200px]:h-[300px]'

type Theme = ModelsPricingGallerySlide['theme']

function getThemeFromFileName(fileName: string): Theme {
  const name = fileName.toLowerCase()

  if (name.startsWith('exterior-')) {
    return 'exterior'
  }

  if (name.startsWith('winter-')) {
    return 'winter'
  }

  if (name.startsWith('construction-') || name.startsWith('production-')) {
    return 'construction'
  }

  if (name.startsWith('interior-')) {
    return 'interior'
  }

  if (name.startsWith('detail-')) {
    return 'detail'
  }

  if (name.startsWith('transport-')) {
    return 'transport'
  }

  return 'exterior'
}

function getAltFromTheme(theme: Theme) {
  switch (theme) {
    case 'exterior':
      return 'Купол на природе'
    case 'winter':
      return 'Купол зимой'
    case 'construction':
      return 'Монтаж купола'
    case 'interior':
      return 'Интерьер купола'
    case 'detail':
      return 'Деталь купола'
    case 'transport':
      return 'Доставка модулей купола'
    default:
      return 'Купол на объекте'
  }
}

const galleryModules = import.meta.glob(
  '../../../assets/images/models-pricing/gallery/*.webp',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>

/** Порядок тем по кругу. detail не сразу после construction. */
const THEME_CYCLE: Theme[] = [
  'exterior',
  'construction',
  'interior',
  'detail',
  'winter',
  'transport',
]

const START_SLIDE_ID = 'exterior-02'

function isForbiddenThemePair(previous: Theme | undefined, next: Theme): boolean {
  if (!previous) return false
  if (previous === next) return true
  // Деталь не ставим сразу после конструкции
  if (previous === 'construction' && next === 'detail') return true
  return false
}

/**
 * Стартует с exterior-02, дальше темы по кругу.
 * Одинаковые темы и пара construction→detail не ставятся подряд, если есть альтернатива.
 */
export function orderModelsPricingGallerySlides(
  slides: ModelsPricingGallerySlide[],
): ModelsPricingGallerySlide[] {
  const queues = new Map<Theme, ModelsPricingGallerySlide[]>()

  for (const theme of THEME_CYCLE) {
    queues.set(theme, [])
  }

  let startSlide: ModelsPricingGallerySlide | undefined

  for (const slide of slides) {
    if (slide.id === START_SLIDE_ID) {
      startSlide = slide
      continue
    }

    const queue = queues.get(slide.theme)
    if (queue) {
      queue.push(slide)
    } else {
      queues.set(slide.theme, [slide])
    }
  }

  const remaining = () =>
    THEME_CYCLE.reduce((sum, theme) => sum + (queues.get(theme)?.length ?? 0), 0)

  const result: ModelsPricingGallerySlide[] = []

  if (startSlide) {
    result.push(startSlide)
  }

  // После экстерьера продолжаем цикл со следующей темы
  let cycleIndex = (THEME_CYCLE.indexOf('exterior') + 1) % THEME_CYCLE.length

  while (remaining() > 0) {
    const lastTheme = result.at(-1)?.theme
    let picked: ModelsPricingGallerySlide | undefined

    for (let offset = 0; offset < THEME_CYCLE.length; offset += 1) {
      const theme = THEME_CYCLE[(cycleIndex + offset) % THEME_CYCLE.length]
      const queue = queues.get(theme)
      if (!queue || queue.length === 0) continue
      if (isForbiddenThemePair(lastTheme, theme)) continue

      picked = queue.shift()
      cycleIndex = (cycleIndex + offset + 1) % THEME_CYCLE.length
      break
    }

    // Если остались только «запрещённые» варианты — берём любой оставшийся
    if (!picked) {
      for (const theme of THEME_CYCLE) {
        const queue = queues.get(theme)
        if (queue && queue.length > 0) {
          picked = queue.shift()
          cycleIndex = (THEME_CYCLE.indexOf(theme) + 1) % THEME_CYCLE.length
          break
        }
      }
    }

    if (picked) {
      result.push(picked)
    } else {
      break
    }
  }

  // Чтобы в бесконечном лупе стык не давал запрещённую пару / одну тему подряд
  if (result.length > 2) {
    const firstTheme = result[0].theme
    const lastIndex = result.length - 1

    if (isForbiddenThemePair(result[lastIndex].theme, firstTheme)) {
      let swapIndex = -1

      for (let index = lastIndex - 1; index > 0; index -= 1) {
        const candidate = result[index]
        if (isForbiddenThemePair(candidate.theme, firstTheme)) continue
        if (isForbiddenThemePair(result[index - 1]?.theme, result[lastIndex].theme)) {
          continue
        }
        if (isForbiddenThemePair(result[lastIndex].theme, result[index + 1]?.theme ?? firstTheme)) {
          continue
        }
        swapIndex = index
        break
      }

      if (swapIndex !== -1) {
        const temp = result[swapIndex]
        result[swapIndex] = result[lastIndex]
        result[lastIndex] = temp
      }
    }
  }

  return result
}

export const MODELS_PRICING_GALLERY_SLIDES: ModelsPricingGallerySlide[] =
  Object.entries(galleryModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, url]) => {
      const fileName = path.split('/').pop() ?? path
      const id = fileName.replace(/\.[^.]+$/, '')
      const theme = getThemeFromFileName(id)

      return {
        id,
        imageSrc: url,
        imageAlt: getAltFromTheme(theme),
        theme,
        heightClassName: COMMON_HEIGHT_CLASS_NAME,
      }
    })
