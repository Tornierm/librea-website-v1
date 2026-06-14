'use client';

import React, { ReactNode } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const sheet = React.useRef(() => new ServerStyleSheet());

  return (
    <StyleSheetManager sheet={sheet.current().instance}>
      {children}
    </StyleSheetManager>
  );
}
