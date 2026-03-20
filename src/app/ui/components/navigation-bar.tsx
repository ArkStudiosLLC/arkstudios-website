import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

const navSurfaceClass =
  'border-b border-white/15 bg-cyan-950/75 shadow-[0_18px_48px_-30px_rgba(8,47,73,0.9)] backdrop-blur-xl'

const navSurfaceSoftClass =
  'border border-white/12 bg-cyan-900/70 shadow-[0_18px_42px_-28px_rgba(8,47,73,0.95)] backdrop-blur-xl'

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
      <p className='flex items-baseline gap-1 text-xl font-semibold text-white'>
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
            <p className='font-light text-white transition-colors hover:text-cyan-100 active:text-cyan-200'>
              {link.name}
            </p>
          </a>
        )
      })}
    </div>
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
  language,
  pathname,
  variant = 'icon',
  label,
}: {
  language: Language
  pathname: string
  variant?: 'icon' | 'row'
  label?: string
}) {
  const targetLanguage = (function () {
    switch (language) {
      case 'en':
        return 'ja'

      case 'ja':
        return 'en'
    }
  })()

  if (variant === 'row') {
    return (
      <a
        href={`/${targetLanguage}${pathname}`}
        className='flex items-center justify-end gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/8 active:bg-white/12'
      >
        <LanguageIcon />
        <p className='text-base font-light text-white'>{label}</p>
      </a>
    )
  }

  return (
    <a href={`/${targetLanguage}${pathname}`}>
      <div
        className={`${navSurfaceSoftClass} h-10 w-10 rounded-xl p-2 text-white transition-colors hover:bg-cyan-800/90 active:bg-cyan-950/90`}
      >
        <LanguageIcon />
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
  const d = (await getDictionary(language)).NavigationBar

  return (
    <nav className='fixed top-0 z-10 w-full text-white select-none'>
      <div className={`${navSurfaceClass}`}>
        <input type='checkbox' id='mobile-menu' className='peer hidden' />

        <div className='flex justify-center'>
          <div className='flex w-[92%] items-center justify-between py-3 sm:w-[90%] md:w-[88%] lg:w-[84%] xl:w-[80%] 2xl:w-6xl'>
            <Logo language={language} />
            <div className='flex items-center gap-5'>
              <div className='hidden md:block'>
                <Links language={language} />
              </div>

              <label
                htmlFor='mobile-menu'
                className='relative flex cursor-pointer md:hidden'
              >
                <div
                  className={`${navSurfaceSoftClass} flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-cyan-800/90 active:bg-cyan-950/90`}
                >
                  <FontAwesomeIcon icon={faBars} className='h-5 w-5' />
                </div>
              </label>

              <div className='hidden md:block'>
                <LanguageToggle language={language} pathname={pathname} />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out peer-checked:grid-rows-[1fr] md:hidden'>
          <div className='overflow-hidden'>
            <div className='flex justify-center border-t border-white/10'>
              <div className='flex w-[92%] flex-col gap-1 py-3 sm:w-[90%]'>
                {links.map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.destination}
                      className='rounded-xl px-3 py-2.5 text-right transition-colors hover:bg-white/8 active:bg-white/12'
                    >
                      <p className='text-base font-light text-white'>{link.name}</p>
                    </a>
                  )
                })}
                <div className='my-1 w-full border-t border-white/8' />
                <LanguageToggle
                  language={language}
                  pathname={pathname}
                  variant='row'
                  label={d.switchLanguage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
