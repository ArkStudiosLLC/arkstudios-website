import Link from 'next/link'

import NavigationBar from './components/navigation-bar'

export default function Page() {
  return (
    <div className='flex h-screen select-none flex-col items-center justify-center gap-5'>
      <NavigationBar />
      <h2 className='text-4xl font-bold md:text-6xl'>ただいま開発中</h2>
      <div className='flex flex-col items-center gap-0'>
        <h2 className='font-extralight md:text-xl'>
          このウェブサイトは近日公開予定です。
        </h2>
        <h2 className='font-extralight md:text-xl'>今しばらくお待ちくださいませ。</h2>
      </div>
      <Link href='https://bitremote.app'>
        <h3 className='rounded-xl bg-black px-4 py-2 font-medium text-white hover:bg-zinc-700 active:bg-zinc-500 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:active:bg-zinc-400'>
          弊社製品
        </h3>
      </Link>
    </div>
  )
}
