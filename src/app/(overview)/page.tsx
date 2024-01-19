import Footer from '../ui/components/footer'
import NavigationBar from '../ui/components/navigation-bar'

export default function Page() {
  return (
    <div className='flex h-screen select-none flex-col justify-center'>
      <NavigationBar />
      <div className='flex h-full flex-col items-center justify-center gap-5 pt-14'>
        <p className='text-4xl font-bold sm:text-6xl'>ただいま開発中</p>
        <p className='text-center font-extralight sm:text-xl'>
          このウェブサイトは近日公開予定です。
          <br />
          今しばらくお待ちくださいませ。
        </p>
        <a href='https://bitremote.app'>
          <p className='rounded-xl bg-black px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 active:bg-zinc-500 dark:bg-white dark:text-black dark:hover:bg-zinc-300 dark:active:bg-zinc-500'>
            弊社製品
          </p>
        </a>
      </div>
      <Footer />
    </div>
  )
}
