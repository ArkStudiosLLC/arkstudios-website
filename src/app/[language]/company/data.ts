import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

/* eslint-disable no-irregular-whitespace */
interface SummaryInfo {
  type: 'plain' | 'address'
  title: string
  contents: string[]
}

export async function getSummaryInfos({
  language,
}: {
  language: Language
}): Promise<SummaryInfo[]> {
  const d = (await getDictionary(language)).Company.Summary.Info

  return [
    {
      type: 'plain',
      title: d.name,
      contents: ['Ａｒｋ　Ｓｔｕｄｉｏｓ合同会社', 'Ark Studios LLC'],
    },
    {
      type: 'plain',
      title: d.FoundingDate.title,
      contents: [d.FoundingDate.content],
    },
    {
      type: 'plain',
      title: d.Capital.title,
      contents: [d.Capital.content],
    },
    {
      type: 'plain',
      title: d.FiscalPeriod.title,
      contents: [d.FiscalPeriod.content],
    },
    {
      type: 'plain',
      title: d.BoardMember.title,
      contents: [d.BoardMember.representativeMembers, d.BoardMember.executiveMembers],
    },
    {
      type: 'plain',
      title: d.Business.title,
      contents: [d.Business.content, d.Business.note],
    },
    {
      type: 'address',
      title: d.address,
      contents: [
        '〒150-0043',
        '東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ－Ｃ',
        '2F-C, Shibuya Dogenzaka Tokyu Bldg., 1-10-8 Dogenzaka, Shibuya, Tokyo',
      ],
    },
  ]
}

interface HistoryInfo {
  type: 'year' | 'month' | 'plain'
  time: string
  content: string
}

export async function getHistoryInfos({
  language,
}: {
  language: Language
}): Promise<HistoryInfo[]> {
  const d = (await getDictionary(language)).Company.History.Info

  return [
    { type: 'year', time: '2025' + d.Date.year, content: '' },
    {
      type: 'month',
      time: d.Date.Month.may,
      content: d[2025][5].relocation,
    },
    { type: 'plain', time: '', content: '' },
    { type: 'year', time: '2023' + d.Date.year, content: '' },
    {
      type: 'month',
      time: d.Date.Month.november,
      content: d[2023][11].bitremote,
    },
    { type: 'plain', time: '', content: d[2023][11].cto },
    { type: 'plain', time: '', content: d[2023][11].ceo },
    { type: 'plain', time: '', content: d[2023][11].founding },
  ]
}
