import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className='flex select-none justify-center bg-black/5 dark:bg-black/10'>
      <div className='w-limited flex items-center justify-between gap-3 py-3 *:text-sm *:text-zinc-800 *:dark:text-zinc-300'>
        <p>© 2024 Ark Studios LLC.</p>
        <div className='flex items-center justify-between gap-5 *:h-6 *:w-6 lg:gap-3 *:lg:h-5 *:lg:w-5'>
          <a href='https://twitter.com/ArkStudiosLLC'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://github.com/ArkStudiosLLC'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='mailto:info@arkstudios.co.jp' className='block lg:hidden'>
            <FontAwesomeIcon icon={faEnvelopeSolid} />
          </a>
        </div>
        <a
          href='mailto:info@arkstudios.co.jp'
          className='hidden lg:flex lg:items-center lg:gap-1.5'
        >
          <FontAwesomeIcon icon={faEnvelopeRegular} className='h-4 w-4' />
          <p>info@arkstudios.co.jp</p>
        </a>
      </div>
    </footer>
  )
}
