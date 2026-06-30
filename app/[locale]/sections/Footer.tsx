'use client';

import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { LibreaLogo } from '@/components/ui/LibreaLogo';
import { WaitlistCTA } from '@/components/ui/WaitlistCTA';

const FooterEl = styled.footer`
  border-top: 1px solid var(--border);
  padding: 80px 0 48px;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Tagline = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 36ch;
  margin: 0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmailLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`;

const EmailSub = styled.p`
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 8px;
`;

const Bottom = styled.div`
  margin: 0 auto;
  max-width: 1350px;
  padding: 40px var(--layout-pad) 0;
  margin-top: 40px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Links = styled.nav`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;

  &:hover { color: var(--text); }
`;

const Copy = styled.p`
  font-size: 13px;
  color: var(--text-muted);
`;

export function Footer() {
  const t = useTranslations('footer');

  return (
    <FooterEl>
      <Inner>
        <Left>
          <LibreaLogo color="var(--brand)" height={28} />
          <Tagline>{t('tagline')}</Tagline>
        </Left>
        <Right>
          <WaitlistCTA />
        </Right>
      </Inner>

      <Bottom>
        <Links>
          <FooterLink href="#">{t('privacy')}</FooterLink>
          <FooterLink href="#">{t('terms')}</FooterLink>
          <FooterLink href="#">{t('contact')}</FooterLink>
        </Links>
        <Copy>© {new Date().getFullYear()} Librea. {t('rights')}</Copy>
      </Bottom>
    </FooterEl>
  );
}
