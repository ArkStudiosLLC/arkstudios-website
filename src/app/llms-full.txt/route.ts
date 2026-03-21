import { getDictionary } from '@/app/i18n/get-dictionary'
import { getAppInfos } from '@/app/[language]/products/data'
import { getSummaryInfos, getHistoryInfos } from '@/app/[language]/company/data'
import { getPrivacyPolicyItems } from '@/app/[language]/privacy/bitremote/data'
import { getEULAItems } from '@/app/[language]/eula/bitremote/data'

export const dynamic = 'force-static'

export async function GET() {
  const d = await getDictionary('en')
  const sections: string[] = []

  // Header
  sections.push(`# Ark Studios`)
  sections.push(`\n> ${d.Metadata.Template.description}`)

  // About
  sections.push(`\n## About\n`)
  sections.push(`${d.Home.Slogan.full}\n`)
  sections.push(d.Home.Business.SoftwareDevelopment.description)

  // Business
  sections.push(`\n### ${d.Home.Business.SoftwareDevelopment.Price.title}\n`)
  sections.push(d.Home.Business.SoftwareDevelopment.Price.content)
  sections.push(`\n### ${d.Home.Business.SoftwareDevelopment.Payment.title}\n`)
  sections.push(d.Home.Business.SoftwareDevelopment.Payment.content)

  // Company Overview
  sections.push(`\n## ${d.Company.Summary.title}\n`)
  const summaryInfos = await getSummaryInfos({ language: 'en' })
  for (const info of summaryInfos) {
    sections.push(`- ${info.title}: ${info.contents.join(', ')}`)
  }

  // Company History
  sections.push(`\n## ${d.Company.History.title}\n`)
  const historyInfos = await getHistoryInfos({ language: 'en' })
  for (const info of historyInfos) {
    if (info.type === 'year') {
      sections.push(`\n### ${info.time}\n`)
    } else if (info.content) {
      sections.push(`- ${info.time ? `${info.time}: ` : ''}${info.content}`)
    }
  }

  // Products
  sections.push(`\n## ${d.Products.title}\n`)
  const appInfos = await getAppInfos({ language: 'en' })
  for (const app of appInfos) {
    sections.push(`### ${app.title}\n`)
    sections.push(`${app.subtitle}\n`)
    sections.push(`- Website: ${app.websiteLink}`)
    sections.push(
      `- ${d.Products.Price.title}: ${app.priceInfos.map((p) => `${d.Products.Price[p.type]} ${p.value}`).join(', ')}`,
    )
    sections.push(
      `- ${d.Products.Platform.title}: ${app.platformInfos.filter((p) => p.isSupported).map((p) => `${p.name} ${p.versionDescription ?? ''}`).join(', ')}`,
    )
    sections.push(`\n#### ${d.Products.Description.title}\n`)
    sections.push(app.description)
    sections.push('')
  }

  // Privacy Policy
  sections.push(`## ${d.PrivacyPolicy.BitRemote.title}\n`)
  const privacyItems = await getPrivacyPolicyItems({ language: 'en' })
  for (const item of privacyItems) {
    sections.push(`### ${item.title}\n`)
    sections.push(item.content)
    sections.push('')
  }

  // EULA
  sections.push(`## ${d.EULA.BitRemote.title}\n`)
  const eulaItems = await getEULAItems({ language: 'en' })
  for (const item of eulaItems) {
    sections.push(`### ${item.title}\n`)
    sections.push(item.content)
    sections.push('')
  }

  const body = sections.join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
