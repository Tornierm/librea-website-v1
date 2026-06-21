'use client';

import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingXl, bodyMd, Section as BaseSection } from '@/components/ui/typography';

const Section = styled(BaseSection)`
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
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

const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const StoreButton = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  background: ${({ $disabled }) =>
    $disabled ? 'transparent' : 'var(--button-primary-bg)'};
  color: ${({ $disabled }) =>
    $disabled ? 'var(--text-muted)' : 'var(--button-primary-text)'};
  border: ${({ $disabled }) =>
    $disabled ? '1px solid var(--border)' : '1px solid transparent'};

  &:hover {
    background: ${({ $disabled }) =>
      $disabled ? 'transparent' : 'var(--button-primary-hover)'};
  }
`;

const StoreLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StoreSubline = styled.span`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  opacity: 0.75;
  line-height: 1;
`;

const StoreName = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
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
          <CTARow>
            {/* iOS App Store */}
            <StoreButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <StoreLabel>
                <StoreSubline>Download on the</StoreSubline>
                <StoreName>App Store</StoreName>
              </StoreLabel>
            </StoreButton>

            {/* Android — disabled */}
            <StoreButton as="div" $disabled>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.2.96.08l12.29-7.1-2.73-2.73zM.91 1.48A1.5 1.5 0 0 0 .5 2.5v19a1.5 1.5 0 0 0 .41 1.02l.05.05L12.2 11.3v-.26L.96 1.43zM22.1 10.3l-2.89-1.67-3.06 3.06 3.06 3.06 2.91-1.68a1.48 1.48 0 0 0 0-2.77zM4.14.24 16.43 7.34 13.7 10.07.14.05A1.5 1.5 0 0 1 4.14.24z"/>
              </svg>
              <StoreLabel>
                <StoreSubline>Coming Soon on</StoreSubline>
                <StoreName>Google Play</StoreName>
              </StoreLabel>
            </StoreButton>
          </CTARow>
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
