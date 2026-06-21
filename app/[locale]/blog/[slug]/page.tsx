import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPost, posts } from '@/lib/posts';
import { StoreButtons } from '@/components/ui/StoreButtons';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const prose: React.CSSProperties = { fontSize: 18, lineHeight: 1.75, color: 'var(--text-muted)' };

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <Link
          href={`/${locale}#blog`}
          style={{ fontSize: 14, color: 'var(--brand)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
        >
          ← Back
        </Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 24px 64px' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', marginBottom: 40 }}>
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: 'cover' }} />
        </div>

        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 12 }}>
          {post.tag}
        </p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 16 }}>
          {post.title}
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 40 }}>{post.date}</p>

        <ReactMarkdown
          components={{
            p:      ({ children }) => <p style={{ ...prose, marginBottom: 24 }}>{children}</p>,
            h2:     ({ children }) => <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', marginTop: 48, marginBottom: 16 }}>{children}</h2>,
            h3:     ({ children }) => <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginTop: 32, marginBottom: 12 }}>{children}</h3>,
            strong: ({ children }) => <strong style={{ color: 'var(--text)', fontWeight: 700 }}>{children}</strong>,
            ul:     ({ children }) => <ul style={{ ...prose, paddingLeft: 24, marginBottom: 24 }}>{children}</ul>,
            ol:     ({ children }) => <ol style={{ ...prose, paddingLeft: 24, marginBottom: 24 }}>{children}</ol>,
            li:     ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li>,
          }}
        >
          {post.body}
        </ReactMarkdown>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: 64, paddingTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Find your next book on Librea</p>
          <StoreButtons />
        </div>
      </main>

      <div style={{ borderTop: '1px solid var(--border)', maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 24 }}>
          More posts
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 18 }}>
          {morePosts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/blog/${p.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: 10, overflow: 'hidden', background: 'var(--bg-subtle)' }}>
                <Image src={p.image} alt={p.title} fill sizes="240px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 4 }}>
                  {p.tag}
                </p>
                <p style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3, color: 'var(--text)' }}>
                  {p.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
