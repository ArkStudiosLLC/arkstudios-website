import 'server-only'
import type { Language } from './i18n-config'

const dictionaries = {
  ja: () => import('../../dictionaries/ja.json').then((module) => module.default),
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (language: Language) =>
  dictionaries[language]?.() ?? dictionaries.ja()
