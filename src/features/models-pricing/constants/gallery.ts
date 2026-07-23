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

/** Чередует пейзажи и технические кадры; два technical подряд не ставит, если хватает пейзажей.
 * Порядок внутри групп стабильный (по имени файла) — не перемешивается при перезагрузке.
 */
export function orderModelsPricingGallerySlides(
  slides: ModelsPricingGallerySlide[],
): ModelsPricingGallerySlide[] {
  const landscape = slides.filter((slide) => !isTechnicalTheme(slide.theme))
  const technical = slides.filter((slide) => isTechnicalTheme(slide.theme))
  const result: ModelsPricingGallerySlide[] = []
  let landscapeIndex = 0
  let technicalIndex = 0
  let pickLandscape = true

  while (landscapeIndex < landscape.length || technicalIndex < technical.length) {
    const lastIsTechnical =
      result.length > 0 &&
      isTechnicalTheme(result[result.length - 1].theme)

    if (lastIsTechnical) {
      if (landscapeIndex < landscape.length) {
        result.push(landscape[landscapeIndex])
        landscapeIndex += 1
        pickLandscape = false
      } else if (technicalIndex < technical.length) {
        result.push(technical[technicalIndex])
        technicalIndex += 1
      }
      continue
    }

    if (pickLandscape && landscapeIndex < landscape.length) {
      result.push(landscape[landscapeIndex])
      landscapeIndex += 1
      pickLandscape = false
    } else if (technicalIndex < technical.length) {
      result.push(technical[technicalIndex])
      technicalIndex += 1
      pickLandscape = true
    } else if (landscapeIndex < landscape.length) {
      result.push(landscape[landscapeIndex])
      landscapeIndex += 1
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
      const swapIndex = result.findIndex(
        (slide, index) =>
          index > 0 &&
          index < result.length - 1 &&
          !isTechnicalTheme(slide.theme),
      )

      if (swapIndex !== -1) {
        const landscapeSlide = result[swapIndex]
        result[swapIndex] = last
        result[result.length - 1] = landscapeSlide
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
