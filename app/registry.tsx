'use client';

import React, { ReactNode } from 'react';

export default function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
