import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import Footer from '@/app/ui/components/footer'
import NavigationBar from '@/app/ui/components/navigation-bar'

import { getPrivacyPolicyItems } from './data'

const pathname = '/privacy/bitremote'

export async function generateMetadata({
  params: { language },
}: {
  params: { language: Language }
}) {
  return { title: (await getDictionary(language)).Metadata.PrivacyPolicy.BitRemote.title }
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

function Links() {
  const links = [
    { title: 'AdMob', destination: 'https://support.google.com/admob/answer/6128543' },
    { title: 'Firebase', destination: 'https://firebase.google.com/support/privacy' },
  ]
  return (
    <div className='flex flex-col gap-1'>
      {links.map((link) => {
        return (
          <div key={link.destination} className='flex'>
            <Label title='・' />
            <a href={link.destination}>
              <p>{link.title}</p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default async function Page({
  params: { language },
}: {
  params: { language: Language }
}) {
  const d = (await getDictionary(language)).PrivacyPolicy.BitRemote
  const policyItems = await getPrivacyPolicyItems({ language })

  return (
    <div className='flex flex-col'>
      <NavigationBar language={language} pathname={pathname} />
      <div className='mt-14 flex min-h-screen justify-center'>
        <div className='w-limited pb-32 pt-14 md:pt-20'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>{d.title}</h1>

            {policyItems.map((policyItem) => {
              const key = policyItem.title + policyItem.content
              return (
                <Subsection key={key} title={policyItem.title}>
                  <Label title={policyItem.content} />

                  <>
                    {(() => {
                      switch (policyItem.type) {
                        case 'plain':
                          return <></>

                        case 'informationCollection':
                          return <Links />
                      }
                    })()}
                  </>
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
