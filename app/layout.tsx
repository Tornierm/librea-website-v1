import { Inter, Libre_Baskerville } from 'next/font/google';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/LibreaIcon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable}`}>
        {children}
      </body>
    </html>
  );
}
