'use client';

import { createContext, useContext, useState } from 'react';

interface UIContextValue {
  showGrid: boolean;
  toggleGrid: () => void;
}

const UIContext = createContext<UIContextValue>({
  showGrid: false,
  toggleGrid: () => {},
});

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [showGrid, setShowGrid] = useState(false);
  return (
    <UIContext.Provider value={{ showGrid, toggleGrid: () => setShowGrid((v) => !v) }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
