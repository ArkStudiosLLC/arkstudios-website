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
      <div className='w-limited flex flex-col items-center *:whitespace-nowrap *:text-2xl *:font-black *:text-cyan-900 *:sm:text-4xl *:xl:text-5xl *:2xl:text-6xl *:dark:text-cyan-200'>
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

function BusinessSection() {
  function SubSection({ title, content }: { title: string; content: string }) {
    return (
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-semibold sm:text-base 2xl:text-xl'>{title}</p>
        <p className='text-xs font-light sm:text-sm 2xl:text-base dark:text-zinc-300'>
          {content}
        </p>
      </div>
    )
  }

  return (
    <div className='w-limited flex flex-col items-center justify-center gap-10'>
      <p className='text-2xl font-bold sm:text-4xl 2xl:text-5xl'>事業内容</p>
      <div className='flex flex-col gap-6 divide-y-2 divide-dashed divide-zinc-300 rounded-xl bg-zinc-100 p-6 sm:p-10 2xl:p-12 dark:divide-cyan-800 dark:bg-cyan-950 [&>*:not(:first-child)]:pt-6'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-lg font-semibold sm:text-2xl 2xl:text-3xl'>
            ソフトウェア設計・販売
          </p>
          <p className='text-xs sm:text-sm 2xl:text-base dark:text-zinc-300'>
            自社開発のソフトウェアの企画、設計、開発、販売を主軸に事業を展開しています。
          </p>
        </div>
        <div className='flex flex-col gap-4 sm:gap-6 2xl:gap-8'>
          <SubSection
            title='価格に関して'
            content='各製品には独自の価格設定があります。具体的な価格につきましては、下記「製品一覧」ボタンよりご確認いただけます。'
          />
          <SubSection
            title='購入方法・流れ'
            content='App Store および各製品の公式サイトを通じて、定期購読制と買い切り制、2つの形態で提供しています。定期購読制では、定期的な支払いにより利用できます。買い切り制では、一度の支払いで永続的な利用が可能です。'
          />
        </div>
        <div className='flex w-full justify-center'>
          <a href='/products'>
            <p className='rounded-xl bg-zinc-700 px-8 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-base 2xl:text-lg dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'>
              製品一覧
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className='flex select-none flex-col'>
      <NavigationBar />
      <div className='mt-14 flex flex-col items-center gap-32 divide-y divide-zinc-300 pb-32 pt-8 dark:divide-cyan-800 [&>*:not(:first-child)]:pt-32'>
        <CanvasSection />
        <BusinessSection />
      </div>
      <Footer />
    </div>
  )
}
