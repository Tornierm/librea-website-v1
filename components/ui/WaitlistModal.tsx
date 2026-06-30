'use client';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslations } from 'next-intl';
import { WaitlistForm } from './WaitlistForm';

const DELAY_MS = 20_000;
const SESSION_KEY = 'waitlist_modal_seen';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeIn} 0.25s ease;
`;

const Panel = styled.div`
  background: var(--bg);
  border-radius: var(--radius-lg);
  padding: 40px 36px 36px;
  max-width: 440px;
  width: 100%;
  position: relative;
  animation: ${slideUp} 0.3s ease;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px;
  line-height: 1;
  &:hover { color: var(--text); }
`;

const Heading = styled.h2`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--text);
  margin: 0 0 12px;
`;

const Body = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 28px;
`;

export function WaitlistModal() {
  const t = useTranslations('modal');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <Backdrop onClick={dismiss}>
      <Panel onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={dismiss} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseBtn>
        <Heading>{t('heading')}</Heading>
        <Body>{t('body')}</Body>
        <WaitlistForm />
      </Panel>
    </Backdrop>
  );
}
