export const i18n = {
  defaultLanguage: 'ja',
  languages: ['ja', 'en'],
} as const

export type Language = (typeof i18n)['languages'][number]
