'use client';

import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 48px;
  background: linear-gradient(160deg, #f0f7f0 0%, #f8fafb 60%, #eef5ee 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(45, 106, 45, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(45, 106, 45, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
  position: relative;
  z-index: 1;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(45, 106, 45, 0.08);
  border: 1px solid rgba(45, 106, 45, 0.2);
  color: #2d6a2d;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const Title = styled.h1`
  font-size: 68px;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -2px;
  max-width: 780px;

  span {
    color: #2d6a2d;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    letter-spacing: -1px;
  }
`;

const Subtitle = styled.p`
  font-size: 19px;
  color: #6b7280;
  max-width: 520px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
`;

const PrimaryButton = styled.a`
  background-color: #2d6a2d;
  color: white;
  padding: 15px 32px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.1px;

  &:hover {
    background-color: #1e4d1e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(45, 106, 45, 0.35);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StoreIcon = styled.span`
  font-size: 18px;
  line-height: 1;
`;

const SocialProof = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9ca3af;
  font-size: 13px;
  margin-top: 8px;
`;

const Stars = styled.span`
  color: #f59e0b;
  font-size: 15px;
  letter-spacing: 1px;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <Content>
        <Badge>✦ AI-Powered Learning</Badge>
        <Title>
          Learn <span>Smarter</span>,<br />Not Harder
        </Title>
        <Subtitle>
          Librea is your personal learning companion — adapting to your pace,
          goals, and style to make every study session count.
        </Subtitle>
        <CTAContainer>
          <PrimaryButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <StoreIcon>🍎</StoreIcon> Download for iOS
          </PrimaryButton>
          <PrimaryButton href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <StoreIcon>▶</StoreIcon> Download for Android
          </PrimaryButton>
        </CTAContainer>
        <SocialProof>
          <Stars>★★★★★</Stars>
          <span>Loved by thousands of learners worldwide</span>
        </SocialProof>
      </Content>
    </HeroContainer>
  );
}
