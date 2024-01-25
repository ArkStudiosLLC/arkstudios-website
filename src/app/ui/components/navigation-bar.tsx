import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const links = [
  { name: '製品紹介', destination: '/products' },
  { name: '会社情報', destination: '/company' },
]

function Logo() {
  return (
    <a href='/'>
      <p className='flex items-baseline gap-1 text-xl font-semibold'>
        <span className='rounded-md bg-cyan-800 px-1 py-0.5 text-white'>Ark</span>
        Studios
      </p>
    </a>
  )
}

function Links() {
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

export default function NavigationBar() {
  return (
    <nav className='fixed top-0 z-10 flex w-full justify-center backdrop-blur-3xl transition-colors has-[:checked]:bg-white/85 md:has-[:checked]:bg-inherit dark:bg-black/10 dark:has-[:checked]:bg-cyan-950/95 dark:md:has-[:checked]:bg-black/10'>
      <div className='w-limited flex items-center justify-between py-3'>
        <Logo />
        <div className='hidden md:block'>
          <Links />
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
      </div>
    </nav>
  )
}
