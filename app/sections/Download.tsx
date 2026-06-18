'use client';

import styled from 'styled-components';

const DownloadContainer = styled.section`
  width: 100%;
  padding: 110px 48px;
  background-color: #f8fafb;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #2d6a2d 0%, #1a4d1a 100%);
  border-radius: 28px;
  padding: 72px 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 48px 28px;
    border-radius: 20px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: white;
  letter-spacing: -1.5px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 34px;
    letter-spacing: -0.5px;
  }
`;

const Subtitle = styled.p`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.75);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

const StoreButton = styled.a`
  background-color: white;
  color: #1a4d1a;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -0.1px;

  &:hover {
    background-color: #f0faf0;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const StoreIconWrap = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const StoreText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;

  small {
    font-size: 10px;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export default function Download() {
  return (
    <DownloadContainer>
      <Inner>
        <TextGroup>
          <Title>Start learning today</Title>
          <Subtitle>
            Join thousands of learners already achieving their goals.
            Free to download, always improving.
          </Subtitle>
        </TextGroup>
        <ButtonContainer>
          <StoreButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <StoreIconWrap>🍎</StoreIconWrap>
            <StoreText>
              <small>Download on the</small>
              App Store
            </StoreText>
          </StoreButton>
          <StoreButton href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <StoreIconWrap>▶</StoreIconWrap>
            <StoreText>
              <small>Get it on</small>
              Google Play
            </StoreText>
          </StoreButton>
        </ButtonContainer>
      </Inner>
    </DownloadContainer>
  );
}
