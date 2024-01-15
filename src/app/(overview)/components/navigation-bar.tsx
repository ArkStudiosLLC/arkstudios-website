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
            <p className='font-light hover:font-semibold hover:text-cyan-100'>
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
    <nav className='flex h-14 w-screen items-center justify-between bg-white/50 p-4 backdrop-blur-2xl backdrop-filter dark:bg-black/10'>
      <Logo />
      <div className='hidden md:block'>
        <Links />
      </div>
    </nav>
  )
}
