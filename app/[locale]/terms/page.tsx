import { LegalArticle } from '@/components/LegalArticle';
import { termsContent } from '@/lib/legal/terms';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: locale === 'de' ? 'Nutzungsbedingungen — Librea' : 'Terms of Use — Librea' };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  return <LegalArticle markdown={termsContent[locale] ?? termsContent.en} />;
}
