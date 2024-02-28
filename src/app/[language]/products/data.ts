import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

export interface PlatformInfo {
  name: 'iOS' | 'iPadOS' | 'macOS' | 'visionOS' | 'watchOS' | 'tvOS'
  isSupported: boolean
  versionDescription?: string
}

export interface PriceInfo {
  type: 'month' | 'year' | 'lifetime'
  value: string
}

export interface AppInfo {
  title: string
  subtitle: string
  iconSource: string
  iconFallbackSource: string
  websiteLink: string
  description: string
  priceInfos: PriceInfo[]
  platformInfos: PlatformInfo[]
}

export async function getAppInfos({
  language,
}: {
  language: Language
}): Promise<AppInfo[]> {
  const d = (await getDictionary(language)).Products

  return [
    {
      title: 'BitRemote',
      subtitle: d.BitRemote.subtitle,
      iconSource: '/images/app-icons/BitRemote.webp',
      iconFallbackSource: '/images/app-icons/BitRemote.png',
      websiteLink: 'https://bitremote.app',
      description: d.BitRemote.description,
      priceInfos: [
        { type: 'month', value: d.BitRemote.PriceInfo.month },
        { type: 'year', value: d.BitRemote.PriceInfo.year },
        { type: 'lifetime', value: d.BitRemote.PriceInfo.lifetime },
      ],
      platformInfos: [
        { name: 'iOS', isSupported: true, versionDescription: '17.0+' },
        { name: 'iPadOS', isSupported: true, versionDescription: '17.0+' },
        { name: 'macOS', isSupported: true, versionDescription: '14.0+' },
        { name: 'visionOS', isSupported: false },
        { name: 'watchOS', isSupported: false },
        { name: 'tvOS', isSupported: false },
      ],
    },
  ]
}
