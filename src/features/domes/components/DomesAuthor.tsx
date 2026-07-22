import authorPhoto from '@/assets/images/domes/andrey_eliseev.webp'

import { DOMES_AUTHOR } from '../constants/content'

export function DomesAuthor() {
  return (
    <div className="flex items-end gap-3 min-[861px]:gap-4">
      <img
        alt={DOMES_AUTHOR.name}
        className="size-[72px] shrink-0 rounded-md object-cover object-top min-[1200px]:size-20"
        height={80}
        loading="lazy"
        src={authorPhoto}
        width={80}
      />

      <div className="grid gap-0.5">
        <p className="type-caption font-semibold text-accent-alt">{DOMES_AUTHOR.name}</p>
        <p className="type-caption text-accent-alt/80">{DOMES_AUTHOR.role}</p>
      </div>
    </div>
  )
}
