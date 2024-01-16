/* eslint-disable no-irregular-whitespace */
import { Metadata } from 'next'
import React from 'react'

import NavigationBar from '../(overview)/components/navigation-bar'

export const metadata: Metadata = {
  title: '会社情報',
}

function BasicInfoSection() {
  return (
    <Section title='会社概要'>
      <Subsection title='会社名称'>
        <Label>
          Ark Studios 合同会社
          <br />
          Ark Studios LLC
        </Label>
      </Subsection>

      <Subsection title='正式名称'>
        <Label>
          Ａｒｋ　Ｓｔｕｄｉｏｓ合同会社
          <br />
          ARK STUDIOS LIMITED LIABILITY COMPANY
        </Label>
      </Subsection>

      <Subsection title='所在地'>
        <address className='not-italic'>
          <Label>
            〒131-0043
            <br />
            東京都墨田区立花 2 丁目 25 番 8 号松美荘 16 号室
            <br />
            2-25-8-16 Tachibana, Sumida, Tokyo
          </Label>
        </address>
      </Subsection>

      <Subsection title='設立日'>
        <Label>2023年11月27日</Label>
      </Subsection>

      <Subsection title='資本金'>
        <Label>5,000,000円</Label>
      </Subsection>

      <Subsection title='決算時期'>
        <Label>10月</Label>
      </Subsection>

      <Subsection title='業務内容'>
        <ul>
          <li>
            <Label>
              各種ソフトウェアおよびハードウェアの企画、研究、開発、設計、製造、販売、保守、リース、賃貸及び輸出入
            </Label>
          </li>
          <li>
            <Label>
              各種ウェブサイトの企画、制作、販売、配信、運営及び管理に関する業務
            </Label>
          </li>
        </ul>
      </Subsection>

      <Subsection title='役員構成'>
        <Label>
          代表社員：曾令強
          <br />
          業務執行社員：曾令強、荒木辰造
        </Label>
      </Subsection>
    </Section>
  )
}

function HistorySection() {
  return (
    <Section title='会社沿革'>
      <table>
        <tbody>
          <TableYearRow value='2023年' />
          <TableMonthRow
            value='11月'
            content='ダウンロードタスク遠隔操作アプリ「BitRemote」を提供'
          />
          <TablePlainRow content='荒木辰造が最高技術責任者に就任' />
          <TablePlainRow content='曾令強が最高経営責任者に就任' />
          <TablePlainRow content='東京都墨田区にソフトウェア開発会社として会社設立' />
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

function TableYearRow({ value }: { value: string }) {
  return (
    <tr>
      <td className='whitespace-nowrap text-nowrap text-2xl font-semibold'>{value}</td>
      <td></td>
    </tr>
  )
}

function TableMonthRow({ value, content }: { value: string; content: string }) {
  return (
    <tr className='align-baseline'>
      <td className='whitespace-nowrap text-nowrap font-medium'>{value}</td>
      <td className='h-8'>
        <Label>{content}</Label>
      </td>
    </tr>
  )
}

function TablePlainRow({ content }: { content: string }) {
  return (
    <tr>
      <td></td>
      <td className='h-10'>
        <Label>{content}</Label>
      </td>
    </tr>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className='font-light text-zinc-700 dark:text-zinc-300'>{children}</p>
}

export default function Page() {
  return (
    <div>
      <NavigationBar />
      <div className='mt-14 flex flex-col gap-20 p-14 md:px-40 md:py-20 lg:px-60 xl:px-72 2xl:px-96'>
        <BasicInfoSection />
        <hr />
        <HistorySection />
      </div>
    </div>
  )
}
