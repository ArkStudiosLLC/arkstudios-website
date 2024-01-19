import { StaticImageData } from 'next/image'

import bitRemoteIcon from '@/../public/app-icons/BitRemote.png'

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
  icon: StaticImageData
  websiteLink: string
  description: string
  priceInfos: PriceInfo[]
  platformInfos: PlatformInfo[]
}

export const appInfos: AppInfo[] = [
  {
    title: 'BitRemote',
    subtitle: 'ダウンロードタスク遠隔管理アプリ',
    icon: bitRemoteIcon,
    websiteLink: 'https://bitremote.app',
    description: `BitRemote は、Apple プラットフォームに最適化され、ダウンロードタスクを効率的かつ簡単に管理するツールです。安全性を重視し、クライアント※のログイン情報は弊社サーバーではなく、デバイス内部や iCloud に安全に保管。大切なデータは、いつでもどこでも、お客様だけの手の中に。

    最先端のネイティブフレームワークにより、BitRemote は OS 上で直接動作し、ローカルファイルへの素早いアクセス※※や、バックグラウンドでの安定した動作を実現。加えて、Apple 独自のフレームワークを駆使した特別な機能を提供します。

    広範囲にわたるクライアントのサポートで、BitRemote は以下のクライアントに対応：
    ・aria2
    ・qBittorrent
    ・Transmission
    ・QNAP Download Station
    ・Synology Download Station

    お客様のニーズに合わせて、GitHub でのリクエストに基づき、継続的に新しいクライアントへの対応を拡大していきます。BitRemote で、ダウンロードタスク管理をもっとスマートに、もっと安全に。

    ※ クライアントとは、ダウンロードツールのことを指します。
    ※※ ローカルでダウンロードを行うのではなく、クライアントを遠隔操作するツールです。
    `,
    priceInfos: [
      { type: 'month', value: '120円' },
      { type: 'year', value: '1,200円' },
      { type: 'lifetime', value: '6,000円' },
    ],
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
