import { useEffect, useState } from 'react'

import { Container } from '@/shared/components/layout/container'

import burgerMenuIcon from '@/assets/icons/hero/burger-menu.svg'
import logoIcon from '@/assets/icons/hero/logo.svg'
import phoneIcon from '@/assets/icons/hero/phone.svg'

import {
  HERO_NAVIGATION_COLUMNS,
} from '../constants/navigation'
import { HERO_SOCIAL_LINKS } from '../constants/social-links'
import { CONTACT_PHONES } from '@/shared/constants/contacts'

import { HeroSocialButton } from './HeroSocialButton'

export function HeroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navigationLinks = HERO_NAVIGATION_COLUMNS.flat()

  return (
    <>
    <header className="flex items-center gap-4 min-[721px]:gap-6 min-[1101px]:gap-16">
      <a aria-label="Геодомика — на главную" className="inline-flex shrink-0 pl-0.5" href="/">
        <img
          alt="Геодомика"
          className="h-[68px] w-[76px] min-[721px]:h-[90px] min-[721px]:w-[100px]"
          height={90}
          src={logoIcon}
          width={100}
        />
      </a>

      <nav
        aria-label="Основная навигация"
        className="ml-auto hidden min-[1101px]:flex min-[1101px]:gap-10"
      >
        {HERO_NAVIGATION_COLUMNS.map((column, columnIndex) => (
          <ul key={columnIndex} className="grid gap-2">
            {column.map((link) => (
              <li key={link.href}>
                <a
                  className="type-body text-hero-muted transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-2 min-[721px]:gap-8 min-[1101px]:ml-0">
        <div className="hidden min-[721px]:grid gap-1">
          {CONTACT_PHONES.map((phone) => (
            <a
              key={phone.href}
              className="inline-flex items-center gap-2 whitespace-nowrap type-body font-semibold text-white"
              href={phone.href}
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-4"
                height={16}
                src={phoneIcon}
                width={16}
              />
              {phone.display}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          {HERO_SOCIAL_LINKS.map((social) => (
            <HeroSocialButton
              key={social.label}
              href={social.href}
              label={social.label}
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-[18px] object-contain"
                height={18}
                src={social.iconSrc}
                width={18}
              />
            </HeroSocialButton>
          ))}
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          className="inline-flex h-10 items-center justify-center gap-3 rounded-[5px] bg-accent px-0 text-icon-cream transition-colors hover:bg-accent-hover min-[721px]:h-[42px] min-[721px]:px-5 max-[720px]:w-10 min-[1101px]:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-3 w-5"
            height={12}
            src={burgerMenuIcon}
            width={20}
          />
          <span className="type-body hidden font-semibold min-[721px]:inline max-[720px]:hidden">
            Меню
          </span>
        </button>
      </div>
    </header>

    {isMenuOpen ? (
      <div
        aria-hidden={!isMenuOpen}
        className="fixed inset-0 z-50 min-[1101px]:hidden"
      >
        <button
          aria-label="Закрыть меню"
          className="absolute inset-0 bg-accent-alt/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          type="button"
        />

        <nav
          aria-label="Мобильная навигация"
          className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-x-hidden overflow-y-auto bg-accent-alt shadow-2xl"
        >
          <Container className="pb-8 pt-[max(1.5rem,env(safe-area-inset-top,0px))]">
            <div className="mb-6 flex min-h-10 w-full items-center justify-between gap-4">
              <a
                aria-label="Геодомика — на главную"
                className="inline-flex shrink-0 pl-0.5"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  alt="Геодомика"
                  className="h-[68px] w-[76px]"
                  height={68}
                  src={logoIcon}
                  width={76}
                />
              </a>

              <button
                aria-label="Закрыть меню"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-[5px] bg-accent text-icon-cream transition-colors hover:bg-accent-hover"
                onClick={() => setIsMenuOpen(false)}
                type="button"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="-mx-5 border-b border-white/10 px-5 pb-8 min-[481px]:-mx-6 min-[481px]:px-6 min-[721px]:-mx-8 min-[721px]:px-8">
              <ul className="grid gap-4">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="type-subheading uppercase text-hero-muted transition-colors hover:text-white"
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-6 pb-[env(safe-area-inset-bottom,0px)]">
            <div className="grid gap-3">
              {CONTACT_PHONES.map((phone) => (
                <a
                  key={phone.href}
                  className="inline-flex items-center gap-2 type-body font-semibold text-white"
                  href={phone.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    className="size-4"
                    height={16}
                    src={phoneIcon}
                    width={16}
                  />
                  {phone.display}
                </a>
              ))}
            </div>

            <div className="flex gap-2">
              {HERO_SOCIAL_LINKS.map((social) => (
                <HeroSocialButton
                  key={social.label}
                  href={social.href}
                  label={social.label}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    className="size-[18px] object-contain"
                    height={18}
                    src={social.iconSrc}
                    width={18}
                  />
                </HeroSocialButton>
              ))}
            </div>
            </div>
          </Container>
        </nav>
      </div>
    ) : null}
    </>
  )
}
