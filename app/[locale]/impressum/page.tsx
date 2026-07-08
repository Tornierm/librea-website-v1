import { LegalArticle } from '@/components/LegalArticle';
import { impressumContent } from '@/lib/legal/impressum';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: locale === 'de' ? 'Impressum — Librea' : 'Legal Notice — Librea' };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  return <LegalArticle markdown={impressumContent[locale] ?? impressumContent.en} />;
}
