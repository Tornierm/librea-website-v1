import { SupportContent } from './SupportContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: locale === 'de' ? 'Support & Hilfe — Librea' : 'Support & Help — Librea' };
}

export default function SupportPage() {
  return <SupportContent />;
}
