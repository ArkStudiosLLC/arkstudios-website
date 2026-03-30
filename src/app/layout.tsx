import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://arkstudios.co.jp'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className='subpixel-antialiased'>{children}</body>
    </html>
  )
}
