'use client';

import { Children, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const GAP = 18;
const CARD_WIDTH = 422;

/* ── Styles ── */

const Root = styled.div`
  width: 100%;
`;

const TrackWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Track = styled.div<{ $offset: number }>`
  display: flex;
  gap: ${GAP}px;
  transform: translateX(${({ $offset }) => $offset}px);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

const Slide = styled.div`
  flex-shrink: 0;
`;

const PaginationRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const NavBtn = styled.button<{ $disabled: boolean; $dark?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ $dark }) => $dark ? 'rgba(255,255,255,0.3)' : 'var(--border)'};
  background: ${({ $dark }) => $dark ? 'rgba(255,255,255,0.1)' : 'var(--bg)'};
  color: ${({ $dark }) => $dark ? '#fff' : 'var(--text)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.3 : 1};
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ $dark }) => $dark ? 'rgba(255,255,255,0.2)' : 'var(--bg-subtle)'};
    border-color: ${({ $dark }) => $dark ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)'};
  }
`;

/* ── Component ── */

interface SliderProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function Slider({ children, dark }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(300);
  const [maxActive, setMaxActive] = useState(0);
  const [active, setActive] = useState(0);

  const items = Children.toArray(children);

  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const containerW = el.offsetWidth;
      const isConstrained = containerW < CARD_WIDTH;
      const sw = isConstrained ? containerW - 48 : CARD_WIDTH;
      const visible = Math.floor((containerW + GAP) / (sw + GAP));
      const newMax = Math.max(0, items.length - visible);
      setSlideWidth(sw);
      setMaxActive(newMax);
      setActive(a => Math.min(a, newMax));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [items.length]);

  // touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) setActive(i => Math.min(i + 1, maxActive));
      else setActive(i => Math.max(i - 1, 0));
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [maxActive]);

  const offset = -active * (slideWidth + GAP);

  return (
    <Root>
      <TrackWrap ref={containerRef}>
        <Track $offset={offset}>
          {items.map((child, i) => (
            <Slide key={i} style={{ width: slideWidth }}>
              {child}
            </Slide>
          ))}
        </Track>
      </TrackWrap>
      <PaginationRow>
        <NavBtn
          $disabled={active === 0}
          $dark={dark}
          disabled={active === 0}
          onClick={() => setActive(i => Math.max(i - 1, 0))}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </NavBtn>
        <NavBtn
          $disabled={active === maxActive}
          $dark={dark}
          disabled={active === maxActive}
          onClick={() => setActive(i => Math.min(i + 1, maxActive))}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </NavBtn>
      </PaginationRow>
    </Root>
  );
}
