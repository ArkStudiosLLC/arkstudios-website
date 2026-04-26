import { sharedMetadata } from '@/app/metadata'

import './globals.css'

export const metadata = sharedMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://static.cloudflareinsights.com' />
      </head>
      <body className='subpixel-antialiased'>{children}</body>
    </html>
  )
}
