'use client';

import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  background: linear-gradient(135deg, #e7efe7 0%, #f3f6f6 100%);

  @media (max-width: 768px) {
    padding: 60px 20px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #1a2123;
  line-height: 1.2;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #57686b;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  background-color: #5f8c5f;
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #3a5b3a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(95, 140, 95, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


export default function Hero() {
  return (
    <HeroContainer>
      <Content>
        <Title>Learn Smarter with Librea</Title>
        <Subtitle>
          Transform the way you learn. Librea is your personal learning companion,
          designed to make studying more effective and enjoyable.
        </Subtitle>
        <CTAContainer>
          <PrimaryButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            Download for iOS
          </PrimaryButton>
          <PrimaryButton href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            Download for Android
          </PrimaryButton>
        </CTAContainer>
      </Content>
    </HeroContainer>
  );
}
