import {
  faCalendarDays,
  faCalendarCheck,
  faCircleCheck,
  faCircleXmark,
  faMobile,
  faTablet,
  faLaptop,
  faVrCardboard,
  faClock,
  faTv,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import Footer from '@/app/ui/components/footer'
import NavigationBar from '@/app/ui/components/navigation-bar'

import { AppInfo, getAppInfos, PriceInfo, PlatformInfo } from './data'

const pathname = '/products'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: Language }>
}) {
  return { title: (await getDictionary((await params).language)).Metadata.Products.title }
}

async function SummarySection({
  language,
  appInfo,
}: {
  language: Language
  appInfo: AppInfo
}) {
  const d = (await getDictionary(language)).Products.Summary

  return (
    <div className='flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'>
      <div className='aspect-square shrink-0'>
        <picture>
          <source srcSet={appInfo.iconSource} type='image/webp'></source>
          <img
            src={appInfo.iconFallbackSource}
            alt={appInfo.title}
            loading='lazy'
            decoding='async'
            className='aspect-square w-24 sm:w-32'
          />
        </picture>
      </div>
      <div className='flex w-full flex-col items-start justify-between gap-2 sm:gap-6'>
        <div className='select-text'>
          <h2 className='text-lg font-bold sm:text-2xl'>{appInfo.title}</h2>
          <p className='text-xs font-light sm:text-base'>{appInfo.subtitle}</p>
        </div>
        <div className='flex w-full justify-start'>
          <a
            href={appInfo.websiteLink}
            className='focus-ring rounded-xl bg-zinc-700 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-sm dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'
          >
            <span>{d.website}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

async function DescriptionSection({
  language,
  content,
}: {
  language: Language
  content: string
}) {
  const d = (await getDictionary(language)).Products.Description

  return (
    <div className='flex flex-col gap-3'>
      <SubsectionHeader title={d.title} />
      <p className='text-xs font-light whitespace-pre-line text-zinc-700 select-text sm:text-sm dark:text-zinc-200'>
        {content}
      </p>
    </div>
  )
}

async function PriceSection({
  language,
  infos,
}: {
  language: Language
  infos: PriceInfo[]
}) {
  const d = (await getDictionary(language)).Products.Price

  return (
    <div className='flex flex-col gap-3'>
      <SubsectionHeader title={d.title} />
      <HorizontalScrollSection>
        {infos.map((info) => {
          return (
            <IconCell
              key={info.type + info.value}
              icon={<PriceIcon info={info} />}
              title={(function () {
                switch (info.type) {
                  case 'month':
                    return d.month
                  case 'year':
                    return d.year
                  case 'onetime':
                    return d.onetime
                }
              })()}
              subtitle={info.value}
            />
          )
        })}
      </HorizontalScrollSection>
    </div>
  )
}

async function PlatformSection({
  language,
  infos,
}: {
  language: Language
  infos: PlatformInfo[]
}) {
  const d = (await getDictionary(language)).Products.Platform

  return (
    <div className='flex flex-col gap-3'>
      <SubsectionHeader title={d.title} />
      <HorizontalScrollSection>
        {infos.map((info) => {
          return (
            <IconCell
              key={info.name}
              icon={
                <PlatformIcon
                  info={info}
                  supportLabel={info.isSupported ? d.supported : d.unsupported}
                />
              }
              title={info.name}
              subtitle={info.versionDescription || 'N/A'}
            />
          )
        })}
      </HorizontalScrollSection>
    </div>
  )
}

async function AppCards({ language }: { language: Language }) {
  const appInfos = await getAppInfos({ language: language })

  return (
    <div className='my-10'>
      {appInfos.map((appInfo) => {
        return (
          <article
            key={appInfo.title}
            className='flex w-full flex-col divide-y-2 divide-dashed divide-zinc-300 rounded-3xl bg-zinc-100 p-6 transition-shadow *:not-first:pt-6 *:not-last:pb-6 sm:p-8 lg:p-10 lg:hover:shadow-xl dark:divide-cyan-800 dark:bg-cyan-950 lg:dark:hover:shadow-2xl'
          >
            <SummarySection language={language} appInfo={appInfo} />
            <DescriptionSection language={language} content={appInfo.description} />
            <PriceSection language={language} infos={appInfo.priceInfos} />
            <PlatformSection language={language} infos={appInfo.platformInfos} />
          </article>
        )
      })}
    </div>
  )
}

function HorizontalScrollSection({ children }: { children: React.ReactNode }) {
  return (
    <div className='hidden-scrollbar flex divide-x divide-zinc-300 overflow-x-auto *:not-first:pl-2 *:not-last:pr-2 dark:divide-cyan-800'>
      {children}
    </div>
  )
}

function IconCell({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className='flex w-full min-w-20 flex-col items-center gap-2'>
      {icon}
      <p className='text-sm sm:text-base'>{title}</p>
      <p className='text-xs text-zinc-500 dark:text-zinc-300'>{subtitle}</p>
    </div>
  )
}

function PriceIcon({ info }: { info: PriceInfo }) {
  return (
    <FontAwesomeIcon
      className='h-7 w-auto'
      aria-hidden='true'
      icon={(function () {
        switch (info.type) {
          case 'month':
            return faCalendarDays
          case 'year':
            return faCalendarCheck
          case 'onetime':
            return faReceipt
        }
      })()}
    />
  )
}

function PlatformIcon({
  info,
  supportLabel,
}: {
  info: PlatformInfo
  supportLabel: string
}) {
  return (
    <div className='flex' role='img' aria-label={`${info.name}: ${supportLabel}`}>
      <FontAwesomeIcon
        className='h-7 w-7'
        aria-hidden='true'
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
      <div className='mt-4 -ml-3 h-3 w-3 rounded-full bg-white' aria-hidden='true' />
      <FontAwesomeIcon
        icon={info.isSupported ? faCircleCheck : faCircleXmark}
        aria-hidden='true'
        className={`mt-3.5 -ml-3.5 h-4 w-4 ${
          info.isSupported ? 'text-green-600' : 'text-zinc-500'
        }`}
      />
    </div>
  )
}

function SubsectionHeader({ title }: { title: string }) {
  return <h3 className='text-base font-semibold sm:text-lg'>{title}</h3>
}

export default async function Page({
  params,
}: {
  params: Promise<{ language: Language }>
}) {
  const { language } = await params
  const d = (await getDictionary(language)).Products

  return (
    <div className='flex flex-col'>
      <NavigationBar language={language} pathname={pathname} />
      <main
        id='main-content'
        className='mt-14 flex min-h-screen justify-center select-none'
      >
        <div className='w-limited pt-14 pb-32 md:pt-20'>
          <h1 className='text-4xl font-bold'>{d.title}</h1>
          <AppCards language={language} />
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}
