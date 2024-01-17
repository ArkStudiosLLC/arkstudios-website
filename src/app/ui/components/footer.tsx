import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex w-screen justify-center bg-black/5 dark:bg-black/10'>
      <div className='w-limited flex items-center justify-between py-3 *:text-sm *:text-zinc-800 *:dark:text-zinc-300'>
        <p>© 2024 Ark Studios LLC.</p>
        <div className='flex items-center gap-2'>
          <Link href='https://twitter.com/ArkStudiosLLC'>
            <FontAwesomeIcon icon={faTwitter} className='h-4 w-4' />
          </Link>
          <Link href='https://github.com/ArkStudiosLLC'>
            <FontAwesomeIcon icon={faGithub} className='h-4 w-4' />
          </Link>
        </div>
        <a href='mailto:info@arkstudios.co.jp' className='flex items-center gap-1.5'>
          <FontAwesomeIcon icon={faEnvelope} className='h-4 w-4' />
          <p>info@arkstudios.co.jp</p>
        </a>
      </div>
    </footer>
  )
}
