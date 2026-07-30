'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { eyebrow, headingLg, headingMd, bodyLg } from '@/components/ui/typography';

type FaqItem = { q: string; a: string; href?: string; linkLabel?: string };

const Main = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 48px var(--layout-pad) 96px;
`;

const Eyebrow = styled.p`
  ${eyebrow}
`;

const Heading = styled.h1`
  ${headingLg}
  margin-bottom: 20px;
`;

const Intro = styled.p`
  ${bodyLg}
  max-width: 52ch;
`;

const FaqHeading = styled.h2`
  ${headingMd}
  font-size: clamp(22px, 3vw, 30px);
  margin: 64px 0 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
`;

const Item = styled.details`
  border-bottom: 1px solid var(--border);

  &[open] summary svg {
    transform: rotate(45deg);
  }
`;

const Question = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 4px;
  font-family: var(--font-heading);
  font-size: clamp(17px, 2.2vw, 20px);
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    color: var(--brand);
    transition: transform 0.2s ease;
  }

  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
`;

const Answer = styled.div`
  padding: 0 4px 24px;

  p {
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-muted);
    margin: 0;
  }
`;

const AnswerLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  font-size: 15px;
  font-weight: 600;
  color: var(--brand);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = styled.section`
  margin-top: 72px;
  padding: 40px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
`;

const ContactHeading = styled.h2`
  ${headingMd}
  font-size: clamp(22px, 3vw, 30px);
  margin-bottom: 12px;
`;

const ContactBody = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 auto 28px;
  max-width: 40ch;
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s ease;

  &:hover {
    background: var(--button-primary-hover);
  }
`;

const ResponseNote = styled.p`
  margin: 20px 0 0;
  font-size: 14px;
  color: var(--text-subtle);
`;

function Plus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function SupportContent() {
  const t = useTranslations('support');
  const locale = useLocale();
  const faq = t.raw('faq') as FaqItem[];
  const email = t('email');

  return (
    <Main>
      <Eyebrow>{t('eyebrow')}</Eyebrow>
      <Heading>{t('heading')}</Heading>
      <Intro>{t('intro')}</Intro>

      <FaqHeading>{t('faqHeading')}</FaqHeading>
      <List>
        {faq.map((item, i) => (
          <Item key={i}>
            <Question>
              {item.q}
              <Plus />
            </Question>
            <Answer>
              <p>{item.a}</p>
              {item.href && (
                <AnswerLink href={`/${locale}${item.href}`}>{item.linkLabel} →</AnswerLink>
              )}
            </Answer>
          </Item>
        ))}
      </List>

      <Contact>
        <ContactHeading>{t('contactHeading')}</ContactHeading>
        <ContactBody>{t('contactBody')}</ContactBody>
        <EmailButton href={`mailto:${email}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </svg>
          {email}
        </EmailButton>
        <ResponseNote>{t('responseNote')}</ResponseNote>
      </Contact>
    </Main>
  );
}
