import Image from 'next/image';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { eyebrow, headingLg, bodyMd, TextBlock, Section } from '@/components/ui/typography';

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const TextCol = styled.div`
  grid-column: span 6;
  @media (min-width: 768px) { grid-column: 1 / span 6; }
`;

const MediaCol = styled.div`
  grid-column: span 6;

  @media (min-width: 768px) {
    grid-column: 8 / span 5;
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
`;

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h2`${headingLg} margin-bottom: 24px;`;
const Description = styled.p`
  ${bodyMd}
  max-width: 40ch;
  @media (min-width: 768px) { font-size: 18px; }
`;

export function Claim() {
  const t = useTranslations('claim');

  return (
    <Section>
      <Grid>
        <TextCol>
          <TextBlock>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <Heading>{t('heading')}</Heading>
            <Description>{t('description')}</Description>
          </TextBlock>
        </TextCol>

        <MediaCol>
          <PhotoWrap>
            <Image src="/pexels-pixabay-256431.jpg" alt="Books" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
          </PhotoWrap>
        </MediaCol>
      </Grid>
    </Section>
  );
}
