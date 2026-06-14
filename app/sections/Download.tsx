'use client';

import styled from 'styled-components';

const DownloadContainer = styled.section`
  width: 100%;
  padding: 100px 40px;
  background: linear-gradient(135deg, #5f8c5f 0%, #3a5b3a 100%);
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DownloadButton = styled.a`
  background-color: white;
  color: #5f8c5f;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid white;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: transparent;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export default function Download() {
  return (
    <DownloadContainer>
      <Content>
        <div>
          <Title>Ready to Transform Your Learning?</Title>
          <Subtitle>
            Join thousands of learners who are already achieving their goals with Librea.
            Download now and get started on your learning journey.
          </Subtitle>
        </div>
        <ButtonContainer>
          <DownloadButton href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <span>🍎</span> App Store
          </DownloadButton>
          <DownloadButton href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <span>🤖</span> Google Play
          </DownloadButton>
        </ButtonContainer>
      </Content>
    </DownloadContainer>
  );
}
