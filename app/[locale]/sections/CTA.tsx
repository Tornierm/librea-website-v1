import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { headingDisplay, bodyLg, Section as BaseSection } from '@/components/ui/typography';
import { StoreButtons } from '@/components/ui/StoreButtons';

const Section = styled(BaseSection)`
  text-align: center;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 680px;
  padding: 0 var(--layout-pad);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Heading = styled.h2`${headingDisplay}`;
const Sub = styled.p`${bodyLg} max-width: 38ch;`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export function CTA() {
  const t = useTranslations('cta');

  return (
    <Section id="download">
      <Inner>
        <Heading>{t('heading')}</Heading>
        <Sub>{t('description')}</Sub>
        <ButtonsWrap>
          <StoreButtons />
        </ButtonsWrap>
      </Inner>
    </Section>
  );
}
