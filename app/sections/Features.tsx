'use client';

import styled from 'styled-components';

const FeaturesContainer = styled.section`
  width: 100%;
  padding: 100px 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #1a2123;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  padding: 30px;
  border-radius: 12px;
  background-color: #f3f6f6;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e7efe7;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(95, 140, 95, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a2123;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #57686b;
  line-height: 1.6;
`;

const features = [
  {
    icon: '📚',
    title: 'Smart Learning',
    description: 'AI-powered personalized learning paths tailored to your pace and style.',
  },
  {
    icon: '⚡',
    title: 'Quick Sessions',
    description: 'Learn in bite-sized chunks. Perfect for busy schedules and on-the-go studying.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Track your progress with detailed analytics and insights on your learning journey.',
  },
  {
    icon: '🎯',
    title: 'Goal Setting',
    description: 'Set ambitious goals and achieve them with our structured learning plans.',
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Connect with other learners, share tips, and grow together.',
  },
  {
    icon: '🏆',
    title: 'Achievements',
    description: 'Earn badges and rewards as you progress through your learning journey.',
  },
];

export default function Features() {
  return (
    <FeaturesContainer>
      <Content>
        <Title>Why Choose Librea?</Title>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <Icon>{feature.icon}</Icon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Content>
    </FeaturesContainer>
  );
}
