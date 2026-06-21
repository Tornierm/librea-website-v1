'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { Slider } from '@/components/ui/Slider';
import { eyebrow, headingMd, TextBlock, Section as BaseSection } from '@/components/ui/typography';

const testimonials = [
  { initials: 'LM', color: '#4A7C59', quoteKey: 'q1', nameKey: 'n1', metaKey: 'm1' },
  { initials: 'JR', color: '#2D6A9F', quoteKey: 'q2', nameKey: 'n2', metaKey: 'm2' },
  { initials: 'SK', color: '#8B4513', quoteKey: 'q3', nameKey: 'n3', metaKey: 'm3' },
  { initials: 'AM', color: '#6B3FA0', quoteKey: 'q4', nameKey: 'n4', metaKey: 'm4' },
];

const Section = styled(BaseSection)`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    pointer-events: none;
  }
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Eyebrow = styled.p`${eyebrow} color: rgba(255, 255, 255, 0.9);`;
const Heading = styled.h2`${headingMd} color: #fff;`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: #4A7C59;
  font-size: 14px;
`;

const Quote = styled.p`
  font-size: 16px;
  line-height: 1.65;
  color: #111;
  flex: 1;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const Avatar = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`;

const AuthorName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #111;
`;

const AuthorMeta = styled.p`
  font-size: 12px;
  color: #666;
`;

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <Section id="testimonials">
      <Image
        src="/pexels-pixabay-256431.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <Inner>
        <Header>
          <TextBlock>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <Heading>{t('heading')}</Heading>
          </TextBlock>
        </Header>

        <Slider dark>
          {testimonials.map(({ initials, color, quoteKey, nameKey, metaKey }) => (
            <Card key={nameKey}>
              <Stars>★★★★★</Stars>
              <Quote>"{t(quoteKey)}"</Quote>
              <Author>
                <Avatar $color={color}>{initials}</Avatar>
                <div>
                  <AuthorName>{t(nameKey)}</AuthorName>
                  <AuthorMeta>{t(metaKey)}</AuthorMeta>
                </div>
              </Author>
            </Card>
          ))}
        </Slider>
      </Inner>
    </Section>
  );
}
