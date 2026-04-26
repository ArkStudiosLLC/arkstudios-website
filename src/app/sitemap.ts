export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

const BASE_URL = 'https://arkstudios.co.jp'

const routes = ['', '/products', '/company', '/privacy/bitremote', '/eula/bitremote']

const languages = ['ja', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = routes.flatMap((route) =>
    languages.map((lang) => ({
      url:
        route === '' && lang === 'ja' ? `${BASE_URL}/` : `${BASE_URL}/${lang}${route}/`,
      alternates: {
        languages: {
          ja: route === '' ? `${BASE_URL}/` : `${BASE_URL}/ja${route}/`,
          en: `${BASE_URL}/en${route}/`,
          'x-default': route === '' ? `${BASE_URL}/` : `${BASE_URL}/ja${route}/`,
        },
      },
    })),
  )

  return localizedRoutes
}
