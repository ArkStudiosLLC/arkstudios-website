import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Ark Studios',
  robots: 'noindex',
  icons: { icon: '/images/favicons/favicon.ico' },
}

export default function RootNotFound() {
  return (
    <>
      <a
        href='#main-content'
        className='sr-only fixed top-4 left-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-lg focus:not-sr-only dark:bg-cyan-900 dark:text-white'
      >
        メインコンテンツへスキップ
      </a>
      <main
        id='main-content'
        className='flex min-h-screen flex-col items-center justify-center gap-8 px-6'
      >
        <p className='text-8xl font-black text-cyan-900 sm:text-9xl dark:text-cyan-200'>
          404
        </p>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-2xl font-bold sm:text-3xl'>
            ページが見つかりません
          </h1>
          <p
            lang='en'
            className='text-lg text-zinc-600 sm:text-xl dark:text-zinc-400'
          >
            Page Not Found
          </p>
        </div>
        <p className='max-w-md text-center text-sm text-zinc-600 sm:text-base dark:text-zinc-400'>
          お探しのページは存在しないか、移動した可能性があります。
          <br />
          <span lang='en'>
            The page you are looking for does not exist or may have been moved.
          </span>
        </p>
        <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
          <a
            href='/ja/'
            className='focus-ring rounded-xl bg-zinc-700 px-8 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-base dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'
          >
            ホームへ戻る
          </a>
          <a
            href='/en/'
            lang='en'
            className='focus-ring rounded-xl bg-zinc-700 px-8 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-base dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'
          >
            Go to Home
          </a>
        </div>
      </main>
    </>
  )
}
