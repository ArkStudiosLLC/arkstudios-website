import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { type Language } from '@/app/i18n/i18n-config'

export default async function Footer({ language }: { language: Language }) {
  const d = (await getDictionary(language)).Footer

  return (
    <footer
      aria-label={d.landmarkLabel}
      className='flex justify-center bg-black/5 select-none dark:bg-black/10'
    >
      <div className='w-limited flex items-center justify-between gap-3 py-3 *:text-sm *:text-zinc-800 *:dark:text-zinc-300'>
        <p>© 2026 Ark Studios LLC.</p>
        <div className='flex items-center justify-between gap-5 *:h-6 *:w-6 lg:gap-3 *:lg:h-5 *:lg:w-5'>
          <a href='https://twitter.com/ArkStudiosLLC' aria-label={d.twitterLabel}>
            <FontAwesomeIcon icon={faTwitter} aria-hidden='true' />
          </a>
          <a href='https://github.com/ArkStudiosLLC' aria-label={d.githubLabel}>
            <FontAwesomeIcon icon={faGithub} aria-hidden='true' />
          </a>
          <a
            href='mailto:info@arkstudios.co.jp'
            aria-label={d.emailLabel}
            className='block lg:hidden'
          >
            <FontAwesomeIcon icon={faEnvelopeSolid} aria-hidden='true' />
          </a>
        </div>
        <a
          href='mailto:info@arkstudios.co.jp'
          className='hidden lg:flex lg:items-center lg:gap-1.5'
        >
          <FontAwesomeIcon
            icon={faEnvelopeRegular}
            className='h-4 w-4'
            aria-hidden='true'
          />
          <p>info@arkstudios.co.jp</p>
        </a>
      </div>
    </footer>
  )
}
