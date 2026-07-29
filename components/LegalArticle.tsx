import ReactMarkdown from 'react-markdown';

const prose: React.CSSProperties = { fontSize: 16, lineHeight: 1.75, color: 'var(--text-muted)' };

/** Renders a legal markdown document (privacy policy, impressum) with the blog prose styling. */
export function LegalArticle({ markdown }: { markdown: string }) {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
      <ReactMarkdown
        components={{
          h1:     ({ children }) => <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 16 }}>{children}</h1>,
          h2:     ({ children }) => <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', marginTop: 48, marginBottom: 16 }}>{children}</h2>,
          h3:     ({ children }) => <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 19, fontWeight: 700, color: 'var(--text)', marginTop: 32, marginBottom: 12 }}>{children}</h3>,
          p:      ({ children }) => <p style={{ ...prose, marginBottom: 20 }}>{children}</p>,
          strong: ({ children }) => <strong style={{ color: 'var(--text)', fontWeight: 700 }}>{children}</strong>,
          em:     ({ children }) => <em style={{ color: 'var(--text-subtle)' }}>{children}</em>,
          ul:     ({ children }) => <ul style={{ ...prose, paddingLeft: 24, marginBottom: 20, listStyle: 'disc outside' }}>{children}</ul>,
          ol:     ({ children }) => <ol style={{ ...prose, paddingLeft: 24, marginBottom: 20, listStyle: 'decimal outside' }}>{children}</ol>,
          li:     ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li>,
          a:      ({ children, href }) => <a href={href} style={{ color: 'var(--brand)' }} target="_blank" rel="noopener noreferrer">{children}</a>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </main>
  );
}
