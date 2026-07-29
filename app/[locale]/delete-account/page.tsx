import { LegalArticle } from '@/components/LegalArticle';
import { deleteAccountContent } from '@/lib/legal/deleteAccount';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: locale === 'de' ? 'Librea-Konto löschen — Librea' : 'Delete your Librea account — Librea' };
}

export default async function DeleteAccountPage({ params }: Props) {
  const { locale } = await params;
  return <LegalArticle markdown={deleteAccountContent[locale] ?? deleteAccountContent.en} />;
}
