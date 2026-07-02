'use client';

import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingXl, bodyMd } from '@/components/ui/typography';
import { WaitlistCTA } from '@/components/ui/WaitlistCTA';

const Section = styled.div`
  padding:  0 0 48px 0;
  @media (min-width: 768px) { padding: 0 0 96px 0; }
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 0 var(--layout-pad);
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  align-items: end;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const TextCol = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  z-index: 1;

  @media (min-width: 768px) {
    grid-column: 2 / span 5;
  }
`;

const ImageCol = styled.div`
  grid-column: span 6;
  order: -1;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column: 7 / span 5;
    order: 0;
  }
`;

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h1`
  ${headingXl}
  white-space: pre-line;
  margin-bottom: 24px;
  font-size: clamp(48px, 8vw, 72px);
`;
const Description = styled.p`
  ${bodyMd}
  max-width: 44ch;
  margin-bottom: 40px;
  @media (min-width: 768px) { font-size: 18px; }
`;


const ImageWrapper = styled.div`
  position: relative;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  overflow: hidden;
  width: 240px;

  @media (min-width: 768px) {
    width: 312px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    var(--bg) 100%
  );
  pointer-events: none;
`;


export function Hero() {
  const t = useTranslations('hero');

  return (
    <Section>
      <Grid>
        <TextCol>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <Heading>{t('heading')}</Heading>
          <Description>{t('description')}</Description>
          <WaitlistCTA />
        </TextCol>

        <ImageCol>
          <ImageWrapper>
            <img src="/CafeShop.svg" alt="Person reading in a cosy café" width={210} height={228} />
            <ImageOverlay />
          </ImageWrapper>
        </ImageCol>
      </Grid>
    </Section>
  );
}
