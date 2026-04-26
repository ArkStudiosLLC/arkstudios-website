import { getDictionary } from '@/app/i18n/get-dictionary'
import { i18n } from '@/app/i18n/i18n-config'
import { absoluteUrl, buildLanguageAlternates } from '@/app/i18n/urls'
import { localizedMetadata } from '@/app/metadata'
import HomePage from '@/app/ui/components/home-page'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const language = i18n.defaultLanguage
  const d = await getDictionary(language)
  const description = d.Metadata.Template.description

  return {
    ...localizedMetadata({
      description,
      language,
      url: absoluteUrl('/'),
    }),
    alternates: {
      canonical: absoluteUrl('/'),
      languages: buildLanguageAlternates(''),
    },
  }
}

export default function Page() {
  return <HomePage language={i18n.defaultLanguage} />
}
