import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { UIProvider } from '@/components/providers/UIProvider';
import { Header } from '@/components/Header';
import { GridGuide } from '@/components/GridGuide';
import { WaitlistModal } from '@/components/ui/WaitlistModal';
import { Footer } from '@/app/[locale]/sections/Footer';
import StyledComponentsRegistry from '@/app/registry';
import '../globals.css';


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'de')) notFound();

  const messages = await getMessages();

  return (
    <>
      <StyledComponentsRegistry>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <UIProvider>
              <GridGuide />
              <Header />
              <WaitlistModal />
              {children}
              <Footer />
            </UIProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </StyledComponentsRegistry>
    </>
  );
}
