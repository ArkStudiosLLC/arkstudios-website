import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import Footer from '@/app/ui/components/footer'
import NavigationBar from '@/app/ui/components/navigation-bar'

const pathname = ''

async function CanvasSection({ language }: { language: Language }) {
  const d = (await getDictionary(language)).Home.Slogan

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
        <p className='hidden lg:block'>{d.full}</p>
        <p className='block text-left lg:hidden'>
          {d.upper}
          <br />
          {d.lower}
        </p>
      </div>
    </div>
  )
}

async function BusinessSection({ language }: { language: Language }) {
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

  const d = (await getDictionary(language)).Home.Business

  return (
    <div className='w-limited flex flex-col items-center justify-center gap-10'>
      <p className='text-2xl font-bold sm:text-4xl 2xl:text-5xl'>{d.title}</p>
      <div className='flex flex-col gap-6 divide-y-2 divide-dashed divide-zinc-300 rounded-xl bg-zinc-100 p-6 sm:p-10 2xl:p-12 dark:divide-cyan-800 dark:bg-cyan-950 [&>*:not(:first-child)]:pt-6'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-lg font-semibold sm:text-2xl 2xl:text-3xl'>
            {d.SoftwareDevelopment.title}
          </p>
          <p className='text-xs sm:text-sm 2xl:text-base dark:text-zinc-300'>
            {d.SoftwareDevelopment.description}
          </p>
        </div>
        <div className='flex flex-col gap-4 sm:gap-6 2xl:gap-8'>
          <SubSection
            title={d.SoftwareDevelopment.Price.title}
            content={d.SoftwareDevelopment.Price.content}
          />
          <SubSection
            title={d.SoftwareDevelopment.Payment.title}
            content={d.SoftwareDevelopment.Payment.content}
          />
        </div>
        <div className='flex w-full justify-center'>
          <a href={`/${language}/products`}>
            <p className='rounded-xl bg-zinc-700 px-8 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-600 active:bg-zinc-500 sm:text-base 2xl:text-lg dark:bg-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:active:bg-cyan-600'>
              {d.products}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Page({
  params: { language },
}: {
  params: { language: Language }
}) {
  return (
    <div className='flex select-none flex-col'>
      <NavigationBar language={language} pathname={pathname} />
      <div className='mt-14 flex flex-col items-center gap-32 divide-y divide-zinc-300 pb-32 pt-8 dark:divide-cyan-800 [&>*:not(:first-child)]:pt-32'>
        <CanvasSection language={language} />
        <BusinessSection language={language} />
      </div>
      <Footer />
    </div>
  )
}
