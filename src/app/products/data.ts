import { StaticImageData } from 'next/image'

import bitRemoteIcon from '@/../public/app-icons/BitRemote.png'

export interface PlatformInfo {
  name: 'iOS' | 'iPadOS' | 'macOS' | 'visionOS' | 'watchOS' | 'tvOS'
  isSupported: boolean
  versionDescription?: string
}

export interface AppInfo {
  name: string
  description: string
  websiteLink: string
  icon: StaticImageData
  screenshots: StaticImageData[]
  platformInfos: PlatformInfo[]
}

export const appInfos: AppInfo[] = [
  {
    name: 'BitRemote',
    description: 'ダウンロードタスク遠隔操作アプリ',
    websiteLink: 'https://bitremote.app',
    icon: bitRemoteIcon,
    screenshots: [],
    platformInfos: [
      { name: 'iOS', isSupported: true, versionDescription: '16.0+' },
      { name: 'iPadOS', isSupported: true, versionDescription: '16.0+' },
      { name: 'macOS', isSupported: true, versionDescription: '13.0+' },
      { name: 'visionOS', isSupported: false },
      { name: 'watchOS', isSupported: false },
      { name: 'tvOS', isSupported: false },
    ],
  },
]
