'use client';

import { useUI } from '@/components/providers/UIProvider';

const GAP = 18;
const MAX_WIDTH = 1350;
const LINE_COLOR = 'rgba(99,179,237,0.5)';

export function GridDivider() {
  const { showGrid } = useUI();
  if (!showGrid) return null;
  return <div style={{ borderTop: `1px dashed ${LINE_COLOR}` }} />;
}

export function GridGuide() {
  const { showGrid } = useUI();
  if (!showGrid) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] flex items-stretch justify-center">
      <div
        className="h-full w-full grid grid-cols-6 md:grid-cols-12"
        style={{ maxWidth: MAX_WIDTH, gap: GAP, padding: '0 var(--layout-pad)' }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full ${i >= 6 ? 'hidden md:block' : ''}`}
            style={{
              borderLeft: `1px dashed ${LINE_COLOR}`,
              borderRight: `1px dashed ${LINE_COLOR}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
