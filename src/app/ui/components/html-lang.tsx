'use client'

import { useEffect } from 'react'

export default function HtmlLang({ language }: { language: string }) {
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return null
}
