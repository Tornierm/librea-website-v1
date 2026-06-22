import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { LibreaLogo } from '@/components/ui/LibreaLogo';
import { StoreButtons } from '@/components/ui/StoreButtons';

export default async function SignupConfirmationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('signupConfirmation');

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <Link href={`/${locale}`} style={{ marginBottom: 48 }}>
        <LibreaLogo color="var(--brand)" height={32} />
      </Link>

      <div style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--brand-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(28px, 5vw, 40px)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        color: 'var(--text)',
        marginBottom: 16,
        maxWidth: '18ch',
      }}>
        {t('heading')}
      </h1>

      <p style={{
        fontSize: 17,
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '40ch',
        marginBottom: 48,
      }}>
        {t('body')}
      </p>

      <StoreButtons />

      <Link href={`/${locale}`} style={{
        marginTop: 40,
        fontSize: 14,
        color: 'var(--text-muted)',
        textDecoration: 'none',
      }}>
        ← {t('back')}
      </Link>
    </main>
  );
}
