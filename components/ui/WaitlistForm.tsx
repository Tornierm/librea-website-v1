'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &::placeholder { color: var(--text-subtle); opacity: 0.5; }
  &:focus { border-color: var(--brand); }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  border-radius: var(--radius-sm);
  border: none;
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) { background: var(--button-primary-hover); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const ErrorMsg = styled.p`
  font-size: 13px;
  color: #e53e3e;
  margin: 0;
`;

const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  background: var(--brand-soft);
  border: 1px solid var(--brand);
  font-size: 14px;
  color: var(--brand);
  font-weight: 500;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--brand);
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.7;
  &:hover { opacity: 1; }
`;

export function WaitlistForm() {
  const t = useTranslations('waitlist');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!done) return;
    setShowSuccess(true);
    const t = setTimeout(() => setShowSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [done]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t('invalid'));
      return;
    }

    setLoading(true);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setLoading(false);

    if (!res.ok) {
      setError(t('error'));
      return;
    }

    setDone(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder={t('placeholder')}
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={done}
        required
      />
      <SubmitButton type="submit" disabled={loading || done}>
        {loading ? '…' : t('cta')}
      </SubmitButton>
      {showSuccess && (
        <SuccessBox>
          <span>{t('thanks')}</span>
          <CloseButton onClick={() => setShowSuccess(false)} aria-label="Dismiss">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>
        </SuccessBox>
      )}
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Form>
  );
}
