import { i18n } from './i18n-config'

import type { Language } from './i18n-config'

export function localePath(language: Language, pathname: string): string {
  if (pathname === '' || pathname === '/') return `/${language}/`
  const trimmed = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
  return `/${language}/${trimmed}/`
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `https://arkstudios.co.jp${normalized}`
}

export function buildLanguageAlternates(
  pathname: string,
): Record<string, string> {
  return Object.fromEntries(
    i18n.languages.map((lang) => [lang, absoluteUrl(localePath(lang, pathname))]),
  )
}
