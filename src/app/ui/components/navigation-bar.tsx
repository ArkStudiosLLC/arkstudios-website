import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'
import NavigationBarClient from '@/app/ui/components/navigation-bar-client'

async function getLinks({ language }: { language: Language }) {
  const d = (await getDictionary(language)).NavigationBar

  return [
    { name: d.products, destination: `/${language}/products` },
    { name: d.company, destination: `/${language}/company` },
  ]
}

export default async function NavigationBar({
  language,
  pathname,
}: {
  language: Language
  pathname: string
}) {
  const links = await getLinks({ language })
  const d = (await getDictionary(language)).NavigationBar

  return (
    <NavigationBarClient
      homeLabel={d.home}
      language={language}
      links={links}
      mobileMenuLabel={d.openMenu}
      pathname={pathname}
      primaryLabel={d.primaryLabel}
      switchLanguageLabel={d.switchLanguage}
    />
  )
}
