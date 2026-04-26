import type { Language } from '@/app/i18n/i18n-config'
import type { Metadata } from 'next'

export const siteOrigin = 'https://arkstudios.co.jp'

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: 'Ark Studios',
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

export function localizedMetadata({
  description,
  language,
  url,
}: {
  description: string
  language: Language
  url?: string
}): Metadata {
  return {
    title: {
      template: '%s | Ark Studios',
      default: 'Ark Studios',
    },
    description,
    openGraph: {
      type: 'website',
      siteName: 'Ark Studios',
      title: 'Ark Studios',
      description,
      locale: language === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: language === 'ja' ? 'en_US' : 'ja_JP',
      ...(url ? { url } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ark Studios',
      description,
    },
  }
}
