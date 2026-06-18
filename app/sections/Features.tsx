'use client';

import styled from 'styled-components';

const FeaturesContainer = styled.section`
  width: 100%;
  padding: 110px 48px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const SectionLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #2d6a2d;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -1.5px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 34px;
    letter-spacing: -0.5px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  padding: 32px;
  border-radius: 16px;
  background-color: #fafafa;
  border: 1px solid #f0f0f0;
  transition: all 0.25s ease;

  &:hover {
    background-color: #fff;
    border-color: #d4e8d4;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(45, 106, 45, 0.1);
  }
`;

const IconWrapper = styled.div<{ $color: string }>`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background-color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 10px;
  letter-spacing: -0.2px;
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.65;
`;

const features = [
  {
    icon: '📚',
    color: '#e8f5e9',
    title: 'Smart Learning Paths',
    description: 'AI-powered curricula that adapt to your pace, knowledge gaps, and learning style.',
  },
  {
    icon: '⚡',
    color: '#fff8e1',
    title: 'Bite-Sized Sessions',
    description: 'Learn in focused 5–15 minute sessions built for busy schedules and retention.',
  },
  {
    icon: '📊',
    color: '#e3f2fd',
    title: 'Progress Insights',
    description: "Detailed analytics that show you exactly where you're improving and where to focus.",
  },
  {
    icon: '🎯',
    color: '#fce4ec',
    title: 'Goal Setting',
    description: 'Set ambitious targets and stay on track with structured plans and reminders.',
  },
  {
    icon: '👥',
    color: '#f3e5f5',
    title: 'Learning Community',
    description: 'Connect with other learners, share breakthroughs, and stay motivated together.',
  },
  {
    icon: '🏆',
    color: '#fff3e0',
    title: 'Achievements',
    description: 'Earn badges and streaks that reward consistency and celebrate milestones.',
  },
];

export default function Features() {
  return (
    <FeaturesContainer>
      <Content>
        <SectionHeader>
          <SectionLabel>Why Librea</SectionLabel>
          <Title>Everything you need to learn</Title>
          <SectionSubtitle>
            A complete toolkit designed to make learning stick — from first session to mastery.
          </SectionSubtitle>
        </SectionHeader>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Content>
    </FeaturesContainer>
  );
}
