'use client';

import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingLg, bodyMd, TextBlock, Section } from '@/components/ui/typography';

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Header = styled.div`
  grid-column: span 6;

  @media (min-width: 768px) {
    grid-column: 1 / span 12;
  }
`;

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h2`${headingLg}`;

const Card = styled.div`
  grid-column: span 6;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;

  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--brand-soft);
  color: var(--brand);
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
`;

const CardDesc = styled.p`${bodyMd}`;

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Free to start — price tag */
function TagIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

/** Safe and private — shield with check */
function ShieldIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Effortless by design — sparkle */
function SparkleIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5L12 3Z" />
    </svg>
  );
}

const PROMISES = [
  { Icon: TagIcon, titleKey: 'p1_title', descKey: 'p1_desc' },
  { Icon: ShieldIcon, titleKey: 'p2_title', descKey: 'p2_desc' },
  { Icon: SparkleIcon, titleKey: 'p3_title', descKey: 'p3_desc' },
];

export function Agreement() {
  const t = useTranslations('agreement');

  return (
    <Section>
      <Grid>
        <Header>
          <TextBlock>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <Heading>{t('heading')}</Heading>
          </TextBlock>
        </Header>

        {PROMISES.map(({ Icon, titleKey, descKey }) => (
          <Card key={titleKey}>
            <IconWrap>
              <Icon />
            </IconWrap>
            <CardTitle>{t(titleKey)}</CardTitle>
            <CardDesc>{t(descKey)}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
