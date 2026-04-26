import { getDictionary } from '@/app/i18n/get-dictionary'
import { i18n, type Language } from '@/app/i18n/i18n-config'
import { localizedMetadata } from '@/app/metadata'
import HtmlLang from '@/app/ui/components/html-lang'

import type { Viewport } from 'next'

function validateLanguage(lang: string): Language {
  if (i18n.languages.includes(lang as Language)) {
    return lang as Language
  }
  return i18n.defaultLanguage
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#06232e' },
  ],
}

export const dynamicParams = false

export function generateStaticParams() {
  return i18n.languages.map((language) => ({ language: language }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>
}) {
  const language = validateLanguage((await params).language)
  const d = await getDictionary(language)

  return localizedMetadata({
    description: d.Metadata.Template.description,
    language,
  })
}

function NoScriptHiddenStyle() {
  return (
    <noscript>
      <style>
        {`.noscript\\:hidden {
        display: none !important;
        }`}
      </style>
    </noscript>
  )
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ language: string }>
}) {
  const language = validateLanguage((await params).language)
  const d = await getDictionary(language)

  return (
    <>
      <HtmlLang language={language} />
      <NoScriptHiddenStyle />
      <a
        href='#main-content'
        className='sr-only fixed top-4 left-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-lg focus:not-sr-only dark:bg-cyan-900 dark:text-white'
      >
        {d.Accessibility.skipToMain}
      </a>
      {children}
    </>
  )
}
