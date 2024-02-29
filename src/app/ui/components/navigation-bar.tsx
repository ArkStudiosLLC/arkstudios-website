import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

async function getLinks({ language }: { language: Language }) {
  const d = (await getDictionary(language)).NavigationBar

  return [
    { name: d.products, destination: `/${language}/products` },
    { name: d.company, destination: `/${language}/company` },
  ]
}

function Logo({ language }: { language: Language }) {
  return (
    <a href={`/${language}`}>
      <p className='flex items-baseline gap-1 text-xl font-semibold'>
        <span className='rounded-md bg-cyan-800 px-1 py-0.5 text-white'>Ark</span>
        Studios
      </p>
    </a>
  )
}

async function Links({ language }: { language: Language }) {
  const links = await getLinks({ language })

  return (
    <div className='flex gap-4'>
      {links.map((link) => {
        return (
          <a key={link.name} href={link.destination}>
            <p className='font-light transition-colors hover:text-zinc-500 active:text-zinc-300 dark:text-white dark:hover:text-zinc-300 dark:active:text-zinc-500'>
              {link.name}
            </p>
          </a>
        )
      })}
    </div>
  )
}

function LanguageToggle({
  language,
  pathname,
}: {
  language: Language
  pathname: string
}) {
  const targetLanguage = (function () {
    switch (language) {
      case 'en':
        return 'ja'

      case 'ja':
        return 'en'
    }
  })()
  return (
    <a href={`/${targetLanguage}${pathname}`}>
      <div className='h-8 w-8 rounded-lg bg-zinc-200/50 p-1 backdrop-blur-3xl transition-colors hover:bg-zinc-300/75 active:bg-zinc-400 dark:bg-cyan-900/50 dark:hover:bg-cyan-900/75 dark:active:bg-cyan-800'>
        <svg
          stroke='currentColor'
          fill='none'
          stroke-width='2'
          viewBox='0 0 24 24'
          stroke-linecap='round'
          stroke-linejoin='round'
          aria-hidden='true'
          focusable='false'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4 5h7'></path>
          <path d='M7 4c0 4.846 0 7 .5 8'></path>
          <path d='M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143'></path>
          <path d='M12 20l4 -9l4 9'></path>
          <path d='M19.1 18h-6.2'></path>
        </svg>
      </div>
    </a>
  )
}

export default async function NavigationBar({
  language,
  pathname,
}: {
  language: Language
  pathname: string
}) {
  const links = await getLinks({ language })

  return (
    <nav className='fixed top-0 z-10 flex w-full justify-center backdrop-blur-3xl transition-colors has-[:checked]:bg-white/85 md:has-[:checked]:bg-inherit dark:bg-black/10 dark:has-[:checked]:bg-cyan-950/95 dark:md:has-[:checked]:bg-black/10'>
      <div className='w-limited flex items-center justify-between py-3'>
        <Logo language={language} />
        <div className='flex items-center gap-5'>
          <div className='block md:hidden'>
            <LanguageToggle language={language} pathname={pathname} />
          </div>

          <div className='hidden md:block'>
            <Links language={language} />
          </div>

          <div className='relative flex flex-col items-end md:hidden'>
            <FontAwesomeIcon icon={faBars} className='h-5 w-5' />
            <input
              type='checkbox'
              className='peer absolute top-0 m-0 h-full w-full cursor-pointer opacity-0'
            />
            <div className='absolute mt-10 flex scale-y-0 flex-col gap-3 rounded-xl bg-white/85 p-8 opacity-0 shadow-2xl backdrop-blur-3xl transition-opacity peer-checked:scale-y-100 peer-checked:opacity-100 dark:bg-cyan-950/95'>
              {links.map((link) => {
                return (
                  <a key={link.name} href={link.destination}>
                    <p className='whitespace-nowrap text-lg transition-colors hover:text-zinc-500 active:text-zinc-300 dark:text-white dark:hover:text-zinc-300 dark:active:text-zinc-500'>
                      {link.name}
                    </p>
                  </a>
                )
              })}
            </div>
          </div>

          <div className='hidden md:block'>
            <LanguageToggle language={language} pathname={pathname} />
          </div>
        </div>
      </div>
    </nav>
  )
}
