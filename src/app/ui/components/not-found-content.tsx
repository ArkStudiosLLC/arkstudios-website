'use client'

import { useSyncExternalStore } from 'react'

import { i18n } from '@/app/i18n/i18n-config'

import type { Language } from '@/app/i18n/i18n-config'

const noop = () => () => {}

function getLanguage(): Language {
  const lang = document.documentElement.lang
  if (lang === 'ja' || lang === 'en') return lang
  return i18n.defaultLanguage
}

function getServerLanguage(): Language {
  return i18n.defaultLanguage
}

const translations: Record<
  Language,
  { title: string; description: string; goHome: string }
> = {
  ja: {
    title: 'ページが見つかりません',
    description:
      'お探しのページは存在しないか、移動した可能性があります。',
    goHome: 'ホームへ戻る',
  },
  en: {
    title: 'Page Not Found',
    description:
      'The page you are looking for does not exist or may have been moved.',
    goHome: 'Go to Home',
  },
}

export default function NotFoundContent() {
  const language = useSyncExternalStore(noop, getLanguage, getServerLanguage)
  const t = translations[language]

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 px-6'>
      <p className='text-8xl font-black text-cyan-900 sm:text-9xl dark:text-cyan-200'>
        404
      </p>
      <h1 className='text-2xl font-bold sm:text-3xl'>{t.title}</h1>
      <p className='max-w-md text-center text-sm text-zinc-600 sm:text-base dark:text-zinc-400'>
        {t.description}
      </p>
      <a
        href={`/${language}/`}
        className='focus-ring mt-4 rounded-xl bg-zinc-700 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-base dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'
      >
        {t.goHome}
      </a>
    </div>
  )
}
