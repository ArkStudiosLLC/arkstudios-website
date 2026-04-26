import { Language } from '@/app/i18n/i18n-config'
import { absoluteUrl, buildLanguageAlternates, localePath } from '@/app/i18n/urls'
import HomePage from '@/app/ui/components/home-page'

import type { Metadata } from 'next'

const pathname = ''

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: Language }>
}): Promise<Metadata> {
  const language = (await params).language
  return {
    alternates: {
      canonical: absoluteUrl(localePath(language, pathname)),
      languages: buildLanguageAlternates(pathname),
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ language: Language }>
}) {
  const { language } = await params
  return <HomePage language={language} />
}
