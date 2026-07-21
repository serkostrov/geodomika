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
  '../../../assets/images/models-pricing/gallery/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>

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
