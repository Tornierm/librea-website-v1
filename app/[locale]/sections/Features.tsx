'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingMd, bodyMd, TextBlock, Section } from '@/components/ui/typography';

const INTERVAL = 8000;

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    screen: '/app-screen-map.png',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    screen: '/app-screen-2.png',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    screen: '/app-screen-1.png',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    screen: '/app-screen-3.png',
  },
];

/* ── Layout ── */

const Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  gap: 18px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
`;

const TextCol = styled.div`
  @media (min-width: 768px) {
    grid-column: 7 / span 6;
    grid-row: 1;
  }
`;

const PhoneCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-subtle);
  border-radius: 32px;
  padding: 48px 32px 32px;

  @media (min-width: 768px) {
    grid-column: 2 / span 4;
    grid-row: 1 / span 2;
  }
`;

const CardsCol = styled.div`
  @media (min-width: 768px) {
    grid-column: 7 / span 6;
    grid-row: 2;
  }
`;

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h2`${headingMd} margin-bottom: 16px;`;
const Subheading = styled.p`${bodyMd} max-width: 40ch;`;

/* ── Feature boxes — desktop ── */

const FeatureGrid = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
`;

const FeatureBox = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  text-align: left;
  padding: 20px;
  border-radius: 16px;
  border: 1.5px solid ${({ $active }) => $active ? 'var(--brand)' : 'var(--border)'};
  background: ${({ $active }) => $active ? 'var(--brand-soft)' : 'transparent'};
  transition: border-color 0.25s ease, background 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border-color: ${({ $active }) => $active ? 'var(--brand)' : 'var(--text-muted)'};
  }
`;

const FeatureIcon = styled.div<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ $active }) => $active ? 'var(--brand)' : 'var(--bg-subtle)'};
  color: ${({ $active }) => $active ? 'var(--button-primary-text)' : 'var(--text-muted)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, color 0.25s ease;
`;

const FeatureTitle = styled.p<{ $active: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${({ $active }) => $active ? 'var(--text)' : 'var(--text-muted)'};
  transition: color 0.25s ease;
`;

const FeatureDesc = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-muted);
`;

/* ── Mobile slideshow controls ── */

const MobileControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0 24px;
  @media (min-width: 768px) { display: none; }
`;

/* Dots are always in the PhoneCol, MobileControls only shows the active card on mobile */

const Dots = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 16px;
`;

const Dot = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 8px 4px;
  display: flex;
  align-items: center;
`;

const DotTrack = styled.div<{ $active: boolean }>`
  width: ${({ $active }) => $active ? '32px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background: var(--border);
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
`;

const DotFill = styled.div<{ $duration: number }>`
  position: absolute;
  inset: 0;
  background: var(--brand);
  border-radius: 3px;
  transform-origin: left;
  animation: dotProgress ${({ $duration }) => $duration}ms linear forwards;

  @keyframes dotProgress {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

/* ── Phone ── */

const PhoneWrap = styled.div`
  position: relative;
  width: 220px;
`;

const FrameImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  pointer-events: none;
`;

const ScreenViewport = styled.div`
  position: absolute;
  left: 4.40%;
  top: 1.88%;
  width: 91.12%;
  height: 96.24%;
  overflow: hidden;
  z-index: 0;
  clip-path: inset(0 round 13% / 6%);
`;

type SlideDir = 'right' | 'bottom' | 'left' | 'top';

const SLIDE_DIRS: SlideDir[] = ['right', 'bottom', 'left', 'top'];

const fromRight  = keyframes`from { transform: translateX(100%); } to { transform: translate(0,0); }`;
const fromBottom = keyframes`from { transform: translateY(100%); } to { transform: translate(0,0); }`;
const fromLeft   = keyframes`from { transform: translateX(-100%); } to { transform: translate(0,0); }`;
const fromTop    = keyframes`from { transform: translateY(-100%); } to { transform: translate(0,0); }`;

const dirToAnim: Record<SlideDir, ReturnType<typeof keyframes>> = {
  right: fromRight, bottom: fromBottom, left: fromLeft, top: fromTop,
};

const ScreenAnim = styled.div<{ $from: SlideDir; $animate: boolean }>`
  position: absolute;
  inset: 0;
  ${({ $from, $animate }) => $animate && css`
    animation: ${dirToAnim[$from]} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  `}
`;

/* ── Progress bar ── */

const ProgressBar = styled.div`
  height: 2px;
  background: var(--border);
  border-radius: 1px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $duration: number }>`
  height: 100%;
  width: 100%;
  background: var(--brand);
  border-radius: 1px;
  transform-origin: left;
  animation: progress ${({ $duration }) => $duration}ms linear forwards;

  @keyframes progress {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

/* ── Component ── */

export function Features() {
  const t = useTranslations('features');
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const featureData = [
    { titleKey: 'f1_title', descKey: 'f1_desc' },
    { titleKey: 'f2_title', descKey: 'f2_desc' },
    { titleKey: 'f3_title', descKey: 'f3_desc' },
    { titleKey: 'f4_title', descKey: 'f4_desc' },
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((cur) => { setPrev(cur); return (cur + 1) % features.length; });
      setProgressKey((k) => k + 1);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleClick = (i: number) => {
    setPrev(active);
    setActive(i);
    setProgressKey((k) => k + 1);
    startTimer();
  };

  return (
    <Section id="features">
      <Grid>
        <TextCol>
          <TextBlock>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <Heading>{t('heading')}</Heading>
            <Subheading>{t('description')}</Subheading>
          </TextBlock>
        </TextCol>

        <PhoneCol>
          <PhoneWrap>
            <ScreenViewport>
              {prev !== null && (
                <ScreenAnim
                  key={`prev-${prev}-${progressKey}`}
                  $from={SLIDE_DIRS[prev]}
                  $animate={false}
                  style={{ zIndex: 0 }}
                >
                  <Image src={features[prev].screen} alt="" fill sizes="220px" style={{ objectFit: 'cover' }} draggable={false} />
                </ScreenAnim>
              )}
              <ScreenAnim
                key={`${active}-${progressKey}`}
                $from={SLIDE_DIRS[active]}
                $animate={true}
                style={{ zIndex: 1 }}
              >
                <Image src={features[active].screen} alt={`App screen ${active + 1}`} fill sizes="220px" style={{ objectFit: 'cover' }} draggable={false} />
              </ScreenAnim>
            </ScreenViewport>
            <FrameImg src="/iphone-15-pro-frame.svg" alt="iPhone frame" width={1294} height={2656} />
          </PhoneWrap>
          <Dots>
            {features.map((_, i) => (
              <Dot key={i} $active={i === active} onClick={() => handleClick(i)} aria-label={`Go to feature ${i + 1}`}>
                <DotTrack $active={i === active}>
                  {i === active && <DotFill key={progressKey} $duration={INTERVAL} />}
                </DotTrack>
              </Dot>
            ))}
          </Dots>
        </PhoneCol>

        <CardsCol>
          {/* mobile: full active card */}
          <MobileControls>
            <FeatureBox $active style={{ width: '100%', boxSizing: 'border-box' }} onClick={() => handleClick(active)} aria-label={`Feature ${active + 1}`}>
              <FeatureIcon $active>{features[active].icon}</FeatureIcon>
              <FeatureTitle $active>{t(featureData[active].titleKey)}</FeatureTitle>
              <FeatureDesc>{t(featureData[active].descKey)}</FeatureDesc>
              <ProgressBar><ProgressFill key={progressKey} $duration={INTERVAL} /></ProgressBar>
            </FeatureBox>
          </MobileControls>

          {/* desktop: 2×2 grid */}
          <FeatureGrid>
            {features.map(({ icon }, i) => {
              const isActive = i === active;
              return (
                <FeatureBox key={i} $active={isActive} onClick={() => handleClick(i)} aria-label={`Feature ${i + 1}`}>
                  <FeatureIcon $active={isActive}>{icon}</FeatureIcon>
                  <FeatureTitle $active={isActive}>{t(featureData[i].titleKey)}</FeatureTitle>
                  <FeatureDesc>{t(featureData[i].descKey)}</FeatureDesc>
                  {isActive && <ProgressBar><ProgressFill key={progressKey} $duration={INTERVAL} /></ProgressBar>}
                </FeatureBox>
              );
            })}
          </FeatureGrid>
        </CardsCol>
      </Grid>
    </Section>
  );
}
