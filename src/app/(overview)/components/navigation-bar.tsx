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
            <p className='font-light hover:font-semibold active:text-zinc-600 dark:active:text-zinc-400'>
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
    <nav className='fixed top-0 z-10 flex h-14 w-screen items-center justify-between px-10 backdrop-blur-md backdrop-filter dark:bg-black/10'>
      <Logo />
      <div className='hidden sm:block'>
        <Links />
      </div>
      <div className='block sm:hidden'>
        <Link href=''>
          <FontAwesomeIcon icon={faBars} className='h-5 w-5' />
        </Link>
      </div>
    </nav>
  )
}
