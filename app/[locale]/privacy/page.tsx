import { LegalArticle } from '@/components/LegalArticle';
import { privacyContent } from '@/lib/legal/privacy';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: locale === 'de' ? 'Datenschutzerklärung — Librea' : 'Privacy Policy — Librea' };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  return <LegalArticle markdown={privacyContent[locale] ?? privacyContent.en} />;
}
