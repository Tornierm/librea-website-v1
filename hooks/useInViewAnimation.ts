'use client';

import { useEffect, type RefObject } from 'react';

export function useInViewAnimation(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.willChange = 'opacity, transform';

    let rafId: number;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const enterProgress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * (2 / 3))));
      const exitProgress = Math.max(0, Math.min(1, -rect.bottom / (vh * 0.3)));

      el.style.opacity = String(Math.max(0, enterProgress - exitProgress * 0.85));
      el.style.transform = `translateY(${(1 - enterProgress) * 80 - exitProgress * 40}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);
}
