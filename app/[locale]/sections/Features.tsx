'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingMd, bodyMd, TextBlock, Section } from '@/components/ui/typography';

const INTERVAL = 5000;

/* ── Screen layer definitions ──────────────────────────────────────────────
   z-index stack (bottom → top): home, map, profile, createBook
   home    — always visible, never moves
   map     — snaps to position, revealed when profile exits right
   profile — snaps in (covered by createBook), exits right on feature 3
   createBook — slides in from bottom on feature 1, exits down otherwise
*/

type ScreenKey = 'home' | 'map' | 'profile' | 'createBook';

const SCREENS: { key: ScreenKey; src: string; zIndex: number }[] = [
  { key: 'home',       src: '/home.PNG',                zIndex: 1 },
  { key: 'map',        src: '/app-screen-profile.png',  zIndex: 2 },
  { key: 'profile',    src: '/create_book.PNG',         zIndex: 3 },
  { key: 'createBook', src: '/scanning.PNG',            zIndex: 4 },
];

function getScreenTransform(key: ScreenKey, active: number): string {
  switch (key) {
    case 'home': return 'translate(0, 0)';
    case 'map':  return active >= 2 ? 'translate(0, 0)' : 'translate(0, 100%)';
    case 'profile':
      if (active <= 1) return 'translate(0, 100%)'; // stay hidden until feature 2
      if (active >= 3) return 'translate(100%, 0)';
      return 'translate(0, 0)';
    case 'createBook':
      return active === 1 ? 'translate(0, 0)' : 'translate(0, 100%)';
  }
}

function getScreenTransition(key: ScreenKey, active: number): string {
  // Home and Map never animate themselves
  if (key === 'home' || key === 'map') return 'none';
  // Profile: snap into place for features 0-2 (revealed by CreateBook exiting),
  // only animate when exiting to right on feature 3
  if (key === 'profile') return active === 3 ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
  // CreateBook: always animate
  return 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
}

/* ── Icons ── */

const icons = [
  // Home — people / social
  <svg key="home" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // Create — scan / plus
  <svg key="create" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="7" height="7" rx="1"/><rect x="15" y="2" width="7" height="7" rx="1"/>
    <rect x="2" y="15" width="7" height="7" rx="1"/>
    <path d="M15 15h2v2h-2z"/><path d="M19 15h2v2h-2z"/><path d="M15 19h2v2h-2z"/><path d="M19 19h2v2h-2z"/>
  </svg>,
  // Profile — user / book
  <svg key="profile" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>,
  // Map — location
  <svg key="map" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>,
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

/* ── Feature boxes ── */

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

/* ── Mobile controls ── */

const MobileControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0 24px;
  @media (min-width: 768px) { display: none; }
`;

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
  z-index: 5;
  pointer-events: none;
`;

const ScreenViewport = styled.div`
  position: absolute;
  left: 4.40%;
  top: 1.88%;
  width: 91.12%;
  height: 96.24%;
  overflow: hidden;
  clip-path: inset(0 round 13% / 6%);
`;

const ScreenLayer = styled.div<{ $zIndex: number; $transform: string; $transition: string }>`
  position: absolute;
  inset: 0;
  z-index: ${({ $zIndex }) => $zIndex};
  transform: ${({ $transform }) => $transform};
  transition: ${({ $transition }) => $transition};
  will-change: transform;
`;

/* ── Component ── */

export function Features() {
  const t = useTranslations('features');
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const featureData = [
    { titleKey: 'f1_title', descKey: 'f1_desc' },
    { titleKey: 'f2_title', descKey: 'f2_desc' },
    { titleKey: 'f3_title', descKey: 'f3_desc' },
    { titleKey: 'f4_title', descKey: 'f4_desc' },
  ];

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActive(cur => (cur + 1) % 4);
    }, INTERVAL);
  }, [stopTimer]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(0);
          startTimer();
        } else {
          stopTimer();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => { observer.disconnect(); stopTimer(); };
  }, [startTimer, stopTimer]);

  const handleClick = (i: number) => {
    setActive(i);
    startTimer();
  };

  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 40) return;
    const next = dx < 0
      ? Math.min(active + 1, featureData.length - 1)
      : Math.max(active - 1, 0);
    handleClick(next);
  };

  return (
    <Section id="features" ref={sectionRef}>
      <Grid>
        <TextCol>
          <TextBlock>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <Heading>{t('heading')}</Heading>
            <Subheading>{t('description')}</Subheading>
          </TextBlock>
        </TextCol>

        <PhoneCol>
          <PhoneWrap onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <ScreenViewport>
              {SCREENS.map(({ key, src, zIndex }) => (
                <ScreenLayer
                  key={key}
                  $zIndex={zIndex}
                  $transform={getScreenTransform(key, active)}
                  $transition={getScreenTransition(key, active)}
                >
                  <Image src={src} alt="" fill sizes="220px" style={{ objectFit: 'cover' }} draggable={false} priority={key === 'home'} />
                </ScreenLayer>
              ))}
            </ScreenViewport>
            <FrameImg src="/iphone-15-pro-frame.svg" alt="iPhone frame" width={1294} height={2656} />
          </PhoneWrap>
          <Dots>
            {featureData.map((_, i) => (
              <Dot key={i} $active={i === active} onClick={() => handleClick(i)} aria-label={`Go to feature ${i + 1}`}>
                <DotTrack $active={i === active}>
                  {i === active && <DotFill key={active} $duration={INTERVAL} />}
                </DotTrack>
              </Dot>
            ))}
          </Dots>
        </PhoneCol>

        <CardsCol>
          <MobileControls>
            <FeatureBox $active style={{ width: '100%', boxSizing: 'border-box' }} onClick={() => handleClick(active)} aria-label={`Feature ${active + 1}`}>
              <FeatureIcon $active>{icons[active]}</FeatureIcon>
              <FeatureTitle $active>{t(featureData[active].titleKey)}</FeatureTitle>
              <FeatureDesc>{t(featureData[active].descKey)}</FeatureDesc>
              <ProgressBar><ProgressFill key={active} $duration={INTERVAL} /></ProgressBar>
            </FeatureBox>
          </MobileControls>

          <FeatureGrid>
            {featureData.map(({ titleKey, descKey }, i) => {
              const isActive = i === active;
              return (
                <FeatureBox key={i} $active={isActive} onClick={() => handleClick(i)} aria-label={`Feature ${i + 1}`}>
                  <FeatureIcon $active={isActive}>{icons[i]}</FeatureIcon>
                  <FeatureTitle $active={isActive}>{t(titleKey)}</FeatureTitle>
                  <FeatureDesc>{t(descKey)}</FeatureDesc>
                  {isActive && <ProgressBar><ProgressFill key={active} $duration={INTERVAL} /></ProgressBar>}
                </FeatureBox>
              );
            })}
          </FeatureGrid>
        </CardsCol>
      </Grid>
    </Section>
  );
}
