/* eslint-disable no-irregular-whitespace */
interface SummaryInfo {
  type: 'plain' | 'address'
  title: string
  contents: string[]
}

export const summaryInfos: SummaryInfo[] = [
  {
    type: 'plain',
    title: '会社名称',
    contents: ['Ark Studios 合同会社', 'Ark Studios LLC'],
  },
  {
    type: 'plain',
    title: '正式名称',
    contents: ['Ａｒｋ　Ｓｔｕｄｉｏｓ合同会社', 'ARK STUDIOS LIMITED LIABILITY COMPANY'],
  },
  {
    type: 'plain',
    title: '設立日',
    contents: ['2023年11月27日'],
  },
  {
    type: 'plain',
    title: '資本金',
    contents: ['5,000,000円'],
  },
  {
    type: 'plain',
    title: '決算時期',
    contents: ['10月'],
  },
  {
    type: 'plain',
    title: '役員構成',
    contents: ['代表社員：曾令強', '業務執行社員：曾令強、荒木辰造'],
  },
  {
    type: 'plain',
    title: '事業内容',
    contents: [
      '各種ソフトウェアの企画、設計、開発及び販売',
      '※ スマホ、パソコン、XR ヘッドセット、スマートウォッチ、セットトップボックス等',
    ],
  },
  {
    type: 'address',
    title: '所在地',
    contents: [
      '〒131-0043',
      '東京都墨田区立花 2 丁目 25 番 8 号松美荘 16 号室',
      '2-25-8-16 Tachibana, Sumida, Tokyo',
    ],
  },
]

interface HistoryInfo {
  type: 'year' | 'month' | 'plain'
  time: string
  content: string
}

export const historyInfos: HistoryInfo[] = [
  { type: 'year', time: '2023年', content: '' },
  {
    type: 'month',
    time: '11月',
    content: 'ダウンロードタスク遠隔操作アプリ「BitRemote」を提供',
  },
  { type: 'plain', time: '', content: '荒木辰造が最高技術責任者に就任' },
  { type: 'plain', time: '', content: '曾令強が最高経営責任者に就任' },
  {
    type: 'plain',
    time: '',
    content: '東京都墨田区にソフトウェア開発会社として会社設立',
  },
]
