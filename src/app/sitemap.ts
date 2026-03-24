export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

const BASE_URL = 'https://arkstudios.co.jp'

const routes = ['', '/products', '/company', '/privacy/bitremote', '/eula/bitremote']

const languages = ['ja', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${BASE_URL}/${lang}${route}/`,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja${route}/`,
          en: `${BASE_URL}/en${route}/`,
        },
      },
    })),
  )
}
