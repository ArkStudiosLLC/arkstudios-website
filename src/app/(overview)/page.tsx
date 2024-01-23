import Footer from '../ui/components/footer'
import NavigationBar from '../ui/components/navigation-bar'

function CanvasSection() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-14 rounded-3xl px-6 md:px-10 lg:px-10 xl:px-16 2xl:max-w-[128rem] 2xl:px-24'>
      <picture>
        <source srcSet='/images/Ark.webp' type='image/webp'></source>
        <img
          src='/images/Ark.jpg'
          alt='Ark and sea'
          loading='lazy'
          decoding='async'
          className='h-96 rounded-3xl object-cover md:h-[32rem] lg:h-[42rem] 2xl:h-auto'
        />
      </picture>
      <div className='w-limited flex flex-col items-center *:whitespace-nowrap *:text-2xl *:font-black *:sm:text-4xl *:xl:text-5xl *:2xl:text-6xl *:dark:text-cyan-100'>
        <p className='hidden lg:block'>選び抜かれたソリューション、未来への方舟。</p>
        <p className='block text-left lg:hidden'>
          選び抜かれたソリューション、
          <br />
          未来への方舟。
        </p>
      </div>
    </div>
  )
}

function ProductsSection() {
  return (
    <div className='w-limited flex h-[32rem] flex-col items-center justify-center gap-5 pt-14'>
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
    <div className='flex select-none flex-col'>
      <NavigationBar />
      <div className='mt-14 flex flex-col items-center gap-32 divide-y divide-zinc-300 pb-32 pt-8 dark:divide-cyan-800 [&>*:not(:first-child)]:pt-32'>
        <CanvasSection />
        <ProductsSection />
      </div>
      <Footer />
    </div>
  )
}
