'use client';

import { useRef } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContent({ children, className = '' }: SectionContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  useInViewAnimation(ref);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
