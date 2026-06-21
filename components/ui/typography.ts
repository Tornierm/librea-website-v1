import { css } from 'styled-components';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 48px 0;
  @media (min-width: 768px) { padding: 96px 0; }
`;

export const eyebrow = css`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 16px;
`;

export const headingXl = css`
  font-family: var(--font-heading);
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--text);
`;

export const headingLg = css`
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
`;

export const headingMd = css`
  font-family: var(--font-heading);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
`;

export const headingDisplay = css`
  font-family: var(--font-heading);
  font-size: clamp(40px, 7vw, 80px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--text);
`;

export const bodyLg = css`
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-muted);
`;

export const bodyMd = css`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
`;

/** 24px padding on all sides for text containers within a grid column */
export const TextBlock = styled.div`
  padding: 24px;
`;
