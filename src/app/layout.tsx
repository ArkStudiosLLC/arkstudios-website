import './ui/globals.css'
import { Inter } from 'next/font/google'

import type { Viewport, Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#06232e' },
  ],
}

export const metadata: Metadata = {
  title: {
    template: '%s | Ark Studios',
    default: 'Ark Studios',
  },
  description: '選び抜かれたソリューション、未来への方舟。',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`${inter.className} subpixel-antialiased`}>{children}</body>
    </html>
  )
}
