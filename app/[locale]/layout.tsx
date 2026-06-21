import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { UIProvider } from '@/components/providers/UIProvider';
import { Header } from '@/components/Header';
import { GridGuide } from '@/components/GridGuide';
import { Footer } from '@/app/[locale]/sections/Footer';
import StyledComponentsRegistry from '@/app/registry';
import '../globals.css';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});


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
    <html lang={locale} className={`${inter.variable} ${libreBaskerville.variable}`} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/LibreaIcon.svg" type="image/svg+xml" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <UIProvider>
                <GridGuide />
                <Header />
                {children}
                <Footer />
              </UIProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
