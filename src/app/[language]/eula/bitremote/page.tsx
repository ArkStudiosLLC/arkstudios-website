import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import Footer from '@/app/ui/components/footer'
import NavigationBar from '@/app/ui/components/navigation-bar'

import { getEULAItems } from './data'

const pathname = '/eula/bitremote'

export async function generateMetadata({
  params: { language },
}: {
  params: { language: Language }
}) {
  return { title: (await getDictionary(language)).Metadata.EULA.BitRemote.title }
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-1'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      {children}
    </div>
  )
}

function Label({ title }: { title: string }) {
  return (
    <p className='whitespace-pre-line font-light text-zinc-700 dark:text-zinc-300'>
      {title}
    </p>
  )
}

export default async function Page({
  params: { language },
}: {
  params: { language: Language }
}) {
  const d = (await getDictionary(language)).EULA.BitRemote
  const eulaItems = await getEULAItems({ language })

  return (
    <div className='flex flex-col'>
      <NavigationBar language={language} pathname={pathname} />
      <div className='mt-14 flex min-h-screen justify-center'>
        <div className='w-limited pb-32 pt-14 md:pt-20'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>{d.title}</h1>

            {eulaItems.map((eulaItem) => {
              const key = eulaItem.title + eulaItem.content
              return (
                <Subsection key={key} title={eulaItem.title}>
                  <Label title={eulaItem.content} />
                </Subsection>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
