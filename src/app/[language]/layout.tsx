import '../globals.css'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { i18n, type Language } from '@/app/i18n/i18n-config'

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

  return {
    title: {
      template: '%s | Ark Studios',
      default: 'Ark Studios',
    },
    applicationName: 'Ark Studios',
    description: d.Metadata.Template.description,
    metadataBase: new URL('https://arkstudios.co.jp'),
    openGraph: {
      type: 'website',
      siteName: 'Ark Studios',
      title: 'Ark Studios',
      description: d.Metadata.Template.description,
      locale: language === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: language === 'ja' ? 'en_US' : 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ark Studios',
      description: d.Metadata.Template.description,
    },
    icons: {
      icon: '/images/favicons/favicon.ico',
      shortcut: '/images/favicons/favicon.ico',
      apple: '/images/favicons/apple-touch-icon.png',
      other: [
        {
          url: '/images/favicons/favicon-256x256.png',
          type: 'image/png',
          sizes: '256x256',
          rel: 'icon',
        },
        {
          url: '/images/favicons/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
          rel: 'icon',
        },
        {
          url: '/images/favicons/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
          rel: 'icon',
        },
        {
          url: '/images/favicons/safari-pinned-tab.svg',
          rel: 'mask-icon',
          color: '#000000',
        },
        {
          url: '/site.webmanifest',
          rel: 'manifest',
        },
      ],
    },
    other: {
      'msapplication-TileColor': '#164e63',
      'msapplication-config': '/browserconfig.xml',
    },
  }
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ language: string }>
}) {
  const language = validateLanguage((await params).language)
  const d = await getDictionary(language)

  return (
    <html lang={language}>
      <body className='subpixel-antialiased'>
        <NoScriptHiddenStyle />
        <a
          href='#main-content'
          className='sr-only fixed top-4 left-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-lg focus:not-sr-only dark:bg-cyan-900 dark:text-white'
        >
          {d.Accessibility.skipToMain}
        </a>
        {children}
      </body>
    </html>
  )
}
