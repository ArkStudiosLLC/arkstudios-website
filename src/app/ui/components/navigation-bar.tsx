import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function Logo() {
  return (
    <Link href='/'>
      <p className='flex items-baseline gap-1 text-xl font-semibold'>
        <span className='rounded-md bg-cyan-800 px-1 py-0.5 text-white'>Ark</span>
        Studios
      </p>
    </Link>
  )
}

function Links() {
  const links = [
    { name: '製品紹介', destination: '/products' },
    { name: '会社情報', destination: '/company' },
  ]

  return (
    <div className='flex gap-4'>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.destination}>
            <p className='font-light transition-colors hover:text-zinc-500 active:text-zinc-300 dark:text-white dark:hover:text-zinc-300 dark:active:text-zinc-500'>
              {link.name}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default function NavigationBar() {
  return (
    <nav className='fixed top-0 z-10 flex w-full justify-center backdrop-blur-3xl dark:bg-black/10'>
      <div className='w-limited flex items-center justify-between py-3'>
        <Logo />
        <div className='hidden sm:block'>
          <Links />
        </div>
        <div className='block sm:hidden'>
          <Link href=''>
            <FontAwesomeIcon icon={faBars} className='h-5 w-5' />
          </Link>
        </div>
      </div>
    </nav>
  )
}
