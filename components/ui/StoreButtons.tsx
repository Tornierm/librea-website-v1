'use client';

import styled from 'styled-components';

const IOS_TESTFLIGHT_URL = 'https://testflight.apple.com/join/76sb8uA9';
const ANDROID_PLAY_URL = 'https://play.google.com/store/apps/details?id=dev.librea.app';

const Container = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;

const Row = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;

const ButtonWrap = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  ${({ $fullWidth }) => $fullWidth && 'flex: 1;'}
`;

const StoreButton = styled.a<{ $fullWidth?: boolean }>`
  display: inline-flex;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%; justify-content: center;'}
  align-items: center;
  gap: 10px;
  padding: 11px 18px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border: 1px solid transparent;
  box-sizing: border-box;

  &:hover { background: var(--button-primary-hover); }
`;

const BetaChip = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--brand);
  color: var(--button-primary-text);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 999px;
  line-height: 1.4;
  pointer-events: none;
`;

const StoreLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StoreSubline = styled.span`
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
  opacity: 0.9;
`;

const StoreName = styled.span`
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
`;

const TestingNote = styled.p`
  font-size: 12px;
  color: var(--text-muted);
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--brand);
  flex-shrink: 0;
`;

export function StoreButtons({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <Container $fullWidth={fullWidth}>
      <Row $fullWidth={fullWidth}>
        <ButtonWrap $fullWidth={fullWidth}>
          <StoreButton
            href={IOS_TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            $fullWidth={fullWidth}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <StoreLabel>
              <StoreSubline>Test on</StoreSubline>
              <StoreName>TestFlight</StoreName>
            </StoreLabel>
          </StoreButton>
          <BetaChip>Beta</BetaChip>
        </ButtonWrap>

        <ButtonWrap $fullWidth={fullWidth}>
          <StoreButton
            href={ANDROID_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            $fullWidth={fullWidth}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.2.96.08l12.29-7.1-2.73-2.73zM.91 1.48A1.5 1.5 0 0 0 .5 2.5v19a1.5 1.5 0 0 0 .41 1.02l.05.05L12.2 11.3v-.26L.96 1.43zM22.1 10.3l-2.89-1.67-3.06 3.06 3.06 3.06 2.91-1.68a1.48 1.48 0 0 0 0-2.77zM4.14.24 16.43 7.34 13.7 10.07.14.05A1.5 1.5 0 0 1 4.14.24z"/>
            </svg>
            <StoreLabel>
              <StoreSubline>Get it on</StoreSubline>
              <StoreName>Google Play</StoreName>
            </StoreLabel>
          </StoreButton>
          <BetaChip>Beta</BetaChip>
        </ButtonWrap>
      </Row>

      <TestingNote>
        <Dot />
        Currently in public testing — help us shape Librea.
      </TestingNote>
    </Container>
  );
}
