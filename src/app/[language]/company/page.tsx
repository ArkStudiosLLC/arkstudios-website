import React from 'react'

import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import Footer from '@/app/ui/components/footer'
import NavigationBar from '@/app/ui/components/navigation-bar'

import { getSummaryInfos, getHistoryInfos } from './data'

const pathname = '/company'

export async function generateMetadata({
  params
}: {
  params: Promise<{ language: Language }>
}) {
  return { title: (await getDictionary((await params).language)).Metadata.Company.title }
}

async function SummarySection({ language }: { language: Language }) {
  const d = (await getDictionary(language)).Company.Summary
  const summaryInfos = await getSummaryInfos({ language })

  return (
    <Section title={d.title}>
      {summaryInfos.map((summaryInfo) => {
        const key = summaryInfo.type + summaryInfo.title + summaryInfo.contents.length
        switch (summaryInfo.type) {
          case 'plain':
            return (
              <Subsection key={key} title={summaryInfo.title}>
                {summaryInfo.contents.map((content) => {
                  return <Label key={content}>{content}</Label>
                })}
              </Subsection>
            )

          case 'address':
            return (
              <Subsection key={key} title={summaryInfo.title}>
                <address className='not-italic'>
                  {summaryInfo.contents.map((content) => {
                    return <Label key={content}>{content}</Label>
                  })}
                </address>
                <div className='noscript:hidden my-4 h-96 w-auto rounded-xl bg-zinc-200 p-2 lg:w-3/4 dark:bg-cyan-900'>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.085206037993!2d139.8305953!3d35.7072451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889b6778839b5%3A0xd022b00527a97c74!2sArk%20Studios!5e0!3m2!1sja!2sjp!4v1705495236118!5m2!1s${language}!2sjp`}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='size-full rounded-md'
                  />
                </div>
              </Subsection>
            )
        }
      })}
    </Section>
  )
}

async function HistorySection({ language }: { language: Language }) {
  const d = (await getDictionary(language)).Company.History
  const historyInfos = await getHistoryInfos({ language })

  return (
    <Section title={d.title}>
      <table>
        <tbody>
          {historyInfos.map((historyInfo) => {
            const key = historyInfo.type + historyInfo.time + historyInfo.content
            switch (historyInfo.type) {
              case 'year':
                return (
                  <tr key={key}>
                    <td className='whitespace-nowrap text-nowrap text-2xl font-semibold'>
                      {historyInfo.time}
                    </td>
                    <td></td>
                  </tr>
                )

              case 'month':
                return (
                  <tr key={key} className='align-baseline'>
                    <td className='whitespace-nowrap text-nowrap font-medium'>
                      {historyInfo.time}
                    </td>
                    <td className='h-8'>
                      <Label>{historyInfo.content}</Label>
                    </td>
                  </tr>
                )

              case 'plain':
                return (
                  <tr key={key}>
                    <td></td>
                    <td className='h-10'>
                      <Label>{historyInfo.content}</Label>
                    </td>
                  </tr>
                )
            }
          })}
        </tbody>
      </table>
    </Section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-10'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      {children}
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-1'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      {children}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className='font-light text-zinc-700 dark:text-zinc-300'>{children}</p>
}

export default async function Page({
  params
}: {
  params: Promise<{ language: Language }>
}) {
  const { language } = await params
  return (
    <div>
      <NavigationBar language={language} pathname={pathname} />
      <div className='mt-14 flex min-h-screen flex-col items-center'>
        <div className='w-limited flex flex-col items-center justify-center divide-y divide-zinc-300 pb-32 pt-14 *:w-full md:pt-20 dark:divide-cyan-900 *:not-first:pt-20 *:not-last:pb-20'>
          <SummarySection language={language} />
          <HistorySection language={language} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
