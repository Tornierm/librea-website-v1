'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #111827;
  color: white;
  padding: 64px 48px 32px;

  @media (max-width: 768px) {
    padding: 48px 20px 24px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 260px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.6;
`;

const FooterGrid = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 640px) {
    gap: 32px;
    flex-wrap: wrap;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  line-height: 1.5;

  &:hover {
    color: white;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0 0 28px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <TopRow>
          <Brand>
            <Logo>Librea</Logo>
            <Tagline>Your personal learning companion. Learn smarter, every day.</Tagline>
          </Brand>
          <FooterGrid>
            <FooterSection>
              <SectionTitle>Company</SectionTitle>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </FooterSection>
            <FooterSection>
              <SectionTitle>Product</SectionTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </FooterSection>
            <FooterSection>
              <SectionTitle>Connect</SectionTitle>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
            </FooterSection>
          </FooterGrid>
        </TopRow>
        <Divider />
        <BottomRow>
          <Copyright>© 2025 Librea. All rights reserved.</Copyright>
          <BottomLinks>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </BottomLinks>
        </BottomRow>
      </Content>
    </FooterContainer>
  );
}
