'use client'

import { config } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

// Prevent FontAwesome from injecting its CSS at runtime. Client components
// trigger an unlayered <style> insertion whose `height: 1em` overrides
// Tailwind's layered size utilities (h-7, *:h-6, etc.), shrinking every icon.
config.autoAddCss = false

import { type Language } from '@/app/i18n/i18n-config'

const navSurfaceClass =
  'border-b border-zinc-200 bg-white/75 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-cyan-950/75 dark:shadow-[0_18px_48px_-30px_rgba(8,47,73,0.9)]'

const navSurfaceSoftClass =
  'border border-zinc-200 bg-zinc-100/70 backdrop-blur-xl dark:border-white/12 dark:bg-cyan-900/70 dark:shadow-[0_18px_42px_-28px_rgba(8,47,73,0.95)]'

interface NavigationLink {
  name: string
  destination: string
}

function Logo({
  language,
  homeLabel,
}: {
  language: Language
  homeLabel: string
}) {
  return (
    <a href={`/${language}`} aria-label={homeLabel} className='focus-ring rounded-md'>
      <p className='flex items-baseline gap-1 text-xl font-semibold text-zinc-900 dark:text-white'>
        <span className='rounded-md bg-cyan-800 px-1 py-0.5 text-white'>
          Ark
        </span>
        Studios
      </p>
    </a>
  )
}

function Links({
  currentPath,
  links,
  onNavigate,
  variant = 'desktop',
}: {
  currentPath: string
  links: NavigationLink[]
  onNavigate?: () => void
  variant?: 'desktop' | 'mobile'
}) {
  return (
    <>
      {links.map((link) => {
        const isCurrentPage = link.destination === currentPath

        if (variant === 'mobile') {
          return (
            <a
              key={link.name}
              href={link.destination}
              aria-current={isCurrentPage ? 'page' : undefined}
              className='focus-ring rounded-xl px-3 py-2.5 text-right transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-white/8 dark:active:bg-white/12'
              onClick={onNavigate}
            >
              <p className='text-base font-light text-zinc-700 dark:text-white'>
                {link.name}
              </p>
            </a>
          )
        }

        return (
          <a
            key={link.name}
            href={link.destination}
            aria-current={isCurrentPage ? 'page' : undefined}
            className='focus-ring rounded-xl'
            onClick={onNavigate}
          >
            <p className='font-light text-zinc-700 transition-colors hover:text-zinc-900 active:text-zinc-500 dark:text-white dark:hover:text-cyan-100 dark:active:text-cyan-200'>
              {link.name}
            </p>
          </a>
        )
      })}
    </>
  )
}

const LanguageIcon = () => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
    focusable='false'
    className='h-5 w-5 shrink-0'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M4 5h7'></path>
    <path d='M7 4c0 4.846 0 7 .5 8'></path>
    <path d='M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143'></path>
    <path d='M12 20l4 -9l4 9'></path>
    <path d='M19.1 18h-6.2'></path>
  </svg>
)

function LanguageToggle({
  ariaLabel,
  language,
  onNavigate,
  pathname,
  variant = 'icon',
  label,
}: {
  ariaLabel: string
  language: Language
  onNavigate?: () => void
  pathname: string
  variant?: 'icon' | 'row'
  label?: string
}) {
  const targetLanguage = language === 'en' ? 'ja' : 'en'

  if (variant === 'row') {
    return (
      <a
        href={`/${targetLanguage}${pathname}`}
        aria-label={ariaLabel}
        className='focus-ring flex items-center justify-end gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-white/8 dark:active:bg-white/12'
        onClick={onNavigate}
      >
        <LanguageIcon />
        <p className='text-base font-light text-zinc-700 dark:text-white'>
          {label}
        </p>
      </a>
    )
  }

  return (
    <a
      href={`/${targetLanguage}${pathname}`}
      aria-label={ariaLabel}
      className='focus-ring rounded-xl'
    >
      <div
        className={`${navSurfaceSoftClass} flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-200/90 active:bg-zinc-300/90 dark:text-white dark:hover:bg-cyan-800/90 dark:active:bg-cyan-950/90`}
      >
        <LanguageIcon />
      </div>
    </a>
  )
}

export default function NavigationBarClient({
  homeLabel,
  language,
  links,
  mobileMenuLabel,
  pathname,
  primaryLabel,
  switchLanguageLabel,
}: {
  homeLabel: string
  language: Language
  links: NavigationLink[]
  mobileMenuLabel: string
  pathname: string
  primaryLabel: string
  switchLanguageLabel: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = `/${language}${pathname}`
  const mobileMenuId = 'mobile-navigation-menu'

  return (
    <nav
      aria-label={primaryLabel}
      className='fixed top-0 z-10 w-full text-zinc-900 select-none dark:text-white'
    >
      <div className={navSurfaceClass}>
        <div className='flex justify-center'>
          <div className='flex w-[92%] items-center justify-between py-3 sm:w-[90%] md:w-[88%] lg:w-[84%] xl:w-[80%] 2xl:w-6xl'>
            <Logo language={language} homeLabel={homeLabel} />
            <div className='flex items-center gap-5'>
              <div className='hidden md:flex md:gap-4'>
                <Links currentPath={currentPath} links={links} />
              </div>

              <button
                type='button'
                aria-controls={mobileMenuId}
                aria-expanded={isMenuOpen}
                aria-label={mobileMenuLabel}
                className='focus-ring relative flex cursor-pointer rounded-xl md:hidden'
                onClick={() => setIsMenuOpen((value) => !value)}
              >
                <div
                  className={`${navSurfaceSoftClass} flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-200/90 active:bg-zinc-300/90 dark:text-white dark:hover:bg-cyan-800/90 dark:active:bg-cyan-950/90`}
                >
                  <FontAwesomeIcon
                    icon={isMenuOpen ? faXmark : faBars}
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                </div>
              </button>

              <div className='hidden md:block'>
                <LanguageToggle
                  ariaLabel={switchLanguageLabel}
                  language={language}
                  pathname={pathname}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id={mobileMenuId}
          className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out md:hidden ${
            isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className='overflow-hidden'>
            <div className='flex justify-center border-t border-zinc-200 dark:border-white/10'>
              <div className='flex w-[92%] flex-col gap-1 py-3 sm:w-[90%]'>
                <Links
                  currentPath={currentPath}
                  links={links}
                  onNavigate={() => setIsMenuOpen(false)}
                  variant='mobile'
                />
                <div className='my-1 w-full border-t border-zinc-200 dark:border-white/8' />
                <LanguageToggle
                  ariaLabel={switchLanguageLabel}
                  language={language}
                  onNavigate={() => setIsMenuOpen(false)}
                  pathname={pathname}
                  variant='row'
                  label={switchLanguageLabel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
