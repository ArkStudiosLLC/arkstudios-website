import '../globals.css'
import { Inter } from 'next/font/google'

import { getDictionary } from '@/i18n/get-dictionary'
import { i18n, type Language } from '@/i18n/i18n-config'

import type { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

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
  params: { language },
}: {
  params: { language: Language }
}) {
  const d = await getDictionary(language)

  return {
    title: {
      template: '%s | Ark Studios',
      default: 'Ark Studios',
    },
    description: d.Metadata.Template.description,
    metadataBase: new URL('https://arkstudios.co.jp'),
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

export default function RootLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode
  params: { language: Language }
}) {
  return (
    <html lang={language}>
      <body className={`${inter.className} subpixel-antialiased`}>
        <NoScriptHiddenStyle />
        {children}
      </body>
    </html>
  )
}
