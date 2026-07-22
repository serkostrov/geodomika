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

function isTechnicalTheme(theme: Theme): boolean {
  return theme === 'construction' || theme === 'detail' || theme === 'transport'
}

function shuffleArray<T>(input: T[]): T[] {
  const arr = input.slice()

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

/** Чередует пейзажи и технические кадры; два technical подряд не ставит, если хватает пейзажей. */
export function orderModelsPricingGallerySlides(
  slides: ModelsPricingGallerySlide[],
): ModelsPricingGallerySlide[] {
  const landscape = shuffleArray(
    slides.filter((slide) => !isTechnicalTheme(slide.theme)),
  )
  const technical = shuffleArray(
    slides.filter((slide) => isTechnicalTheme(slide.theme)),
  )
  const result: ModelsPricingGallerySlide[] = []
  let pickLandscape = true

  while (landscape.length > 0 || technical.length > 0) {
    const lastIsTechnical =
      result.length > 0 &&
      isTechnicalTheme(result[result.length - 1].theme)

    if (lastIsTechnical) {
      if (landscape.length > 0) {
        result.push(landscape.shift()!)
        pickLandscape = false
      } else if (technical.length > 0) {
        result.push(technical.shift()!)
      }
      continue
    }

    if (pickLandscape && landscape.length > 0) {
      result.push(landscape.shift()!)
      pickLandscape = false
    } else if (technical.length > 0) {
      result.push(technical.shift()!)
      pickLandscape = true
    } else if (landscape.length > 0) {
      result.push(landscape.shift()!)
      pickLandscape = false
    }
  }

  if (result.length > 1) {
    const first = result[0]
    const last = result[result.length - 1]
    if (
      isTechnicalTheme(first.theme) &&
      isTechnicalTheme(last.theme)
    ) {
      const landscapeIndex = result.findIndex(
        (slide, index) =>
          index > 0 &&
          index < result.length - 1 &&
          !isTechnicalTheme(slide.theme),
      )

      if (landscapeIndex !== -1) {
        const landscape = result[landscapeIndex]
        result[landscapeIndex] = last
        result[result.length - 1] = landscape
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
