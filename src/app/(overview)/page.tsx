import Footer from '../ui/components/footer'
import NavigationBar from '../ui/components/navigation-bar'

function WorkInProgress() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5 pt-14'>
      <p className='text-4xl font-bold sm:text-6xl'>ただいま開発中</p>
      <p className='text-center font-extralight sm:text-xl'>
        このウェブサイトは近日公開予定です。
        <br />
        今しばらくお待ちくださいませ。
      </p>
    </div>
  )
}

export default function Page() {
  return (
    <div className='flex select-none flex-col justify-center'>
      <NavigationBar />
      <WorkInProgress />
      <Footer />
    </div>
  )
}
