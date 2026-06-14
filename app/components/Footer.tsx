'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a2123;
  color: white;
  padding: 60px 40px 30px;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 30px 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <FooterGrid>
          <FooterSection>
            <SectionTitle>Librea</SectionTitle>
            <FooterLink href="#">About Us</FooterLink>
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
            <SectionTitle>Legal</SectionTitle>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterSection>
          <FooterSection>
            <SectionTitle>Connect</SectionTitle>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
          </FooterSection>
        </FooterGrid>
        <Divider />
        <BottomSection>
          <Copyright>
            © 2024 Librea. All rights reserved.
          </Copyright>
          <SocialLinks>
            <FooterLink href="#">📧 Newsletter</FooterLink>
            <FooterLink href="#">❓ Support</FooterLink>
          </SocialLinks>
        </BottomSection>
      </Content>
    </FooterContainer>
  );
}
