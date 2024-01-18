import {
  faCircleCheck,
  faCircleXmark,
  faMobile,
  faTablet,
  faLaptop,
  faVrCardboard,
  faClock,
  faTv,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { AppInfo, PlatformInfo, appInfos } from './data'
import Footer from '../ui/components/footer'
import NavigationBar from '../ui/components/navigation-bar'

export const metadata: Metadata = {
  title: '製品紹介',
}

function AppCards() {
  function SummarySection({ appInfo }: { appInfo: AppInfo }) {
    return (
      <div className='flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'>
        <div className='aspect-square shrink-0'>
          <Image
            src={appInfo.icon}
            alt={appInfo.name}
            className='aspect-square w-24 sm:w-32'
          />
        </div>
        <div className='flex w-full flex-col items-start justify-between gap-2 sm:gap-6'>
          <div>
            <p className='text-lg font-bold sm:text-2xl'>{appInfo.name}</p>
            <p className='text-xs font-light sm:text-base'>{appInfo.description}</p>
          </div>
          <div className='flex w-full justify-start'>
            <Link href={appInfo.websiteLink}>
              <p className='rounded-xl bg-zinc-700 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-sm dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'>
                公式サイト
              </p>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  function PlatformSection({ appInfo }: { appInfo: AppInfo }) {
    return (
      <div className='flex flex-col gap-1'>
        <SubsectionHeader title='動作環境' />
        <div className='flex gap-2 divide-x divide-zinc-300 overflow-x-scroll py-2 dark:divide-cyan-800 [&>*:not(:first-child)]:pl-2'>
          {appInfo.platformInfos.map((platformInfo) => {
            return (
              <div
                key={platformInfo.name}
                className='flex w-full min-w-20 flex-col items-center gap-1'
              >
                <PlatformIcon info={platformInfo} />
                <p className='text-sm sm:text-base'>{platformInfo.name}</p>
                <p className='text-xs text-zinc-500 dark:text-zinc-300'>
                  {platformInfo.versionDescription || 'N/A'}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='my-10'>
      {appInfos.map((appInfo) => {
        return (
          <div
            key={appInfo.name}
            className='flex w-full flex-col gap-6 divide-y-2 divide-dashed divide-zinc-300 rounded-3xl bg-zinc-100 p-6 transition-shadow sm:p-8 lg:p-10 lg:hover:shadow-xl dark:divide-cyan-800 dark:bg-cyan-950 lg:dark:hover:shadow-2xl [&>*:not(:first-child)]:pt-6'
          >
            <SummarySection appInfo={appInfo} />
            <PlatformSection appInfo={appInfo} />
          </div>
        )
      })}
    </div>
  )
}

function PlatformIcon({ info }: { info: PlatformInfo }) {
  return (
    <div className='flex'>
      <FontAwesomeIcon
        className='h-7 w-7'
        icon={(function () {
          switch (info.name) {
            case 'iOS':
              return faMobile
            case 'iPadOS':
              return faTablet
            case 'macOS':
              return faLaptop
            case 'visionOS':
              return faVrCardboard
            case 'watchOS':
              return faClock
            case 'tvOS':
              return faTv
          }
        })()}
      />
      <circle className='-ml-3 mt-4 h-3 w-3 rounded-full bg-white' />
      <FontAwesomeIcon
        icon={info.isSupported ? faCircleCheck : faCircleXmark}
        className={`-ml-3.5 mt-3.5 h-4 w-4 ${
          info.isSupported ? 'text-green-600' : 'text-zinc-500'
        }`}
      />
    </div>
  )
}

function SubsectionHeader({ title }: { title: string }) {
  return <p className='text-base font-semibold sm:text-lg'>{title}</p>
}

export default function Page() {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <NavigationBar />
      <div className='mt-14 flex justify-center'>
        <div className='w-limited pb-32 pt-14 md:pt-20'>
          <h1 className='text-4xl font-bold'>製品一覧</h1>
          <AppCards />
        </div>
      </div>
      <Footer />
    </div>
  )
}
