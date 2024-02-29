import { getDictionary } from '@/app/i18n/get-dictionary'
import { Language } from '@/app/i18n/i18n-config'

export interface PrivacyPolicyItem {
  type: 'plain' | 'informationCollection'
  title: string
  content: string
}

export async function getPrivacyPolicyItems({
  language,
}: {
  language: Language
}): Promise<PrivacyPolicyItem[]> {
  const d = (await getDictionary(language)).PrivacyPolicy.BitRemote

  return [
    {
      type: 'plain',
      title: d.Overview.title,
      content: d.Overview.content,
    },
    {
      type: 'informationCollection',
      title: d.InformationCollection.title,
      content: d.InformationCollection.content,
    },
    {
      type: 'plain',
      title: d.LogData.title,
      content: d.LogData.content,
    },
    {
      type: 'plain',
      title: d.ServiceProviders.title,
      content: d.ServiceProviders.content,
    },
    {
      type: 'plain',
      title: d.Security.title,
      content: d.Security.content,
    },
    {
      type: 'plain',
      title: d.ExternalLinks.title,
      content: d.ExternalLinks.content,
    },
    {
      type: 'plain',
      title: d.ChildrensPrivacy.title,
      content: d.ChildrensPrivacy.content,
    },
    {
      type: 'plain',
      title: d.Disputes.title,
      content: d.Disputes.content,
    },
    {
      type: 'plain',
      title: d.PolicyChanges.title,
      content: d.PolicyChanges.content,
    },
    {
      type: 'plain',
      title: d.ContactUs.title,
      content: d.ContactUs.content,
    },
  ]
}
