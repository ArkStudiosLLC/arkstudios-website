import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

export interface EULAItem {
  type: 'plain'
  title: string
  content: string
}

export async function getEULAItems({
  language,
}: {
  language: Language
}): Promise<EULAItem[]> {
  const d = (await getDictionary(language)).EULA.BitRemote

  return [
    {
      type: 'plain',
      title: d.AgreementAndPriority.title,
      content: d.AgreementAndPriority.content,
    },
    {
      type: 'plain',
      title: d.DeviceLimitation.title,
      content: d.DeviceLimitation.content,
    },
    {
      type: 'plain',
      title: d.EnglishVersionPrevail.title,
      content: d.EnglishVersionPrevail.content,
    },
  ]
}
