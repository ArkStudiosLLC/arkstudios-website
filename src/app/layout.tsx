import './ui/globals.css'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Ark Studios',
    default: 'Ark Studios',
  },
  description: '未来への方舟、選び抜かれたソリューション。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`${inter.className} subpixel-antialiased`}>{children}</body>
    </html>
  )
}
