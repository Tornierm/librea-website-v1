'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingMd, bodyMd } from '@/components/ui/typography';

const TOTAL_STEPS = 3;

const Outer = styled.section`
  position: relative;
  height: ${TOTAL_STEPS * 100}vh;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const StickyInner = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 18px;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 var(--layout-pad);
`;

/* ── Text side — slides track horizontally ── */

const TextArea = styled.div`
  grid-column: 2 / span 5;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const TextTrack = styled.div<{ $step: number }>`
  display: flex;
  width: 100%;
  transform: translateX(${({ $step }) => -$step * 100}%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

const TextSlide = styled.div`
  min-width: 100%;
  flex-shrink: 0;
  padding-right: 40px;
`;

/* ── Video side — fixed ── */

const VideoArea = styled.div`
  grid-column: 8 / span 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  max-width: 240px;
  aspect-ratio: 9 / 19.5;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-subtle);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const VideoWrap = styled.div`
  width: 100%;
  max-width: 240px;
  border-radius: 32px;
  overflow: hidden;
  video { display: block; width: 100%; }
`;

/* ── Typography ── */

const Eyebrow = styled.p`${eyebrow}`;

const StepNumber = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-subtle);
  margin-bottom: 12px;
`;

const Heading = styled.h2`${headingMd} margin-bottom: 20px;`;
const Description = styled.p`
  ${bodyMd}
  max-width: 38ch;
  margin-bottom: 40px;
  @media (min-width: 768px) { font-size: 18px; }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.div<{ $active: boolean }>`
  border-radius: 99px;
  height: 6px;
  background: ${({ $active }) => $active ? 'var(--brand)' : 'var(--border)'};
  width: ${({ $active }) => $active ? '24px' : '6px'};
  transition: all 0.3s ease;
`;

/* ── Component ── */

export function HowItWorks({ videoSrc }: { videoSrc?: string }) {
  const t = useTranslations('howItWorks');
  const outerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);

  const steps = [
    { label: `01`, heading: t('step1_heading'), description: t('step1_description') },
    { label: `02`, heading: t('step2_heading'), description: t('step2_description') },
    { label: `03`, heading: t('step3_heading'), description: t('step3_description') },
  ];

  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -top / scrollable));
      const current = Math.min(Math.floor(raw * TOTAL_STEPS), TOTAL_STEPS - 1);
      setStep(current);

      if (videoRef.current?.duration) {
        videoRef.current.currentTime = raw * videoRef.current.duration;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Outer ref={outerRef}>
      <Sticky>
        <StickyInner>
        <TextArea>
          <TextTrack $step={step}>
            {steps.map((s, i) => (
              <TextSlide key={i}>
                <Eyebrow>{t('eyebrow')}</Eyebrow>
                <StepNumber>{s.label} — {i === 0 ? t('step1_label') : i === 1 ? t('step2_label') : t('step3_label')}</StepNumber>
                <Heading>{s.heading}</Heading>
                <Description>{s.description}</Description>
                <Dots>
                  {steps.map((_, j) => <Dot key={j} $active={j === i} />)}
                </Dots>
              </TextSlide>
            ))}
          </TextTrack>
        </TextArea>

        <VideoArea>
          {videoSrc ? (
            <VideoWrap>
              <video ref={videoRef} src={videoSrc} autoPlay loop muted playsInline />
            </VideoWrap>
          ) : (
            <VideoPlaceholder>Video</VideoPlaceholder>
          )}
        </VideoArea>
        </StickyInner>
      </Sticky>
    </Outer>
  );
}
