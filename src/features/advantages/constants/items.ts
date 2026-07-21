import dropletIcon from '@/assets/icons/advantages/dropled.svg'
import durabilityIcon from '@/assets/icons/advantages/durability.svg'
import layersIcon from '@/assets/icons/advantages/layers.svg'
import picturesIcon from '@/assets/icons/advantages/pictures.svg'
import privacyIcon from '@/assets/icons/advantages/privacy.svg'
import winterIcon from '@/assets/icons/advantages/winter.svg'

export interface AdvantageItemData {
  id: string
  title: string
  description: string
  iconSrc: string
  hasIconFrame: boolean
}

export const ADVANTAGE_ITEMS: AdvantageItemData[] = [
  {
    id: 'privacy',
    title: 'Приватность',
    description:
      'Капитальные стены с утеплителем и жесткой обшивкой позволяют полноценно уединиться с собственным номером, внутри не слышно соседей, соседи не слышат, что происходит внутри.',
    iconSrc: privacyIcon,
    hasIconFrame: true,
  },
  {
    id: 'glazing',
    title: 'Настоящее остекление',
    description:
      'Вид из окна на пейзаж и звёзды гораздо качественнее через настоящее силикатное стекло, чем через прозрачный ПВХ, который с каждым днём становится мутнее.',
    iconSrc: picturesIcon,
    hasIconFrame: true,
  },
  {
    id: 'durability',
    title: 'Долговечность',
    description:
      'Срок службы 25-50 лет в зависимости от условий и качества ухода купола. ПВХ-тент на солнце деградирует за 5 лет, а через 3 года теряет цвет и блеск.',
    iconSrc: durabilityIcon,
    hasIconFrame: false,
  },
  {
    id: 'condensate',
    title: 'Конденсат',
    description:
      'В нашем куполе эта проблема отсутствует. В тентовых шатрах, даже утеплённых, постоянно потеют стены, либо от разницы температур, либо от недостатка вентиляции.',
    iconSrc: dropletIcon,
    hasIconFrame: true,
  },
  {
    id: 'hard-walls',
    title: 'Настоящие жесткие стены',
    description:
      'Чёткая геометрия - структура стен с идеально ровными плоскими гранями вместо провисов и заломов тента. На стены можно вешать бра, картины и декор, в них и на них можно смонтировать проводку, розетки, телевизор, блок кондиционера.',
    iconSrc: layersIcon,
    hasIconFrame: false,
  },
  {
    id: 'heat-retention',
    title: 'Теплосбережение',
    description:
      'Утепление тентовых конструкций между двумя мембранами имеет массу проблем: мостики холода, в том числе из-за металлокаркаса, намокание утеплителя из-за конденсата, что ведет к биопоражениям (плесень и грибок), просадка и деформация, сложно защитить утеплитель от грызунов. В итоге, затраты на отопление и кондиционирование до 2-х раз больше.',
    iconSrc: winterIcon,
    hasIconFrame: false,
  },
]
