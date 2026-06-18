'use client';

import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #2d6a2d;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #2d6a2d;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const CTAButton = styled.a`
  background-color: #2d6a2d;
  color: white;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  cursor: pointer;
  letter-spacing: 0.1px;

  &:hover {
    background-color: #1e4d1e;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(45, 106, 45, 0.3);
  }
`;

export default function NavigationBar() {
  return (
    <Nav>
      <Logo>Librea</Logo>
      <NavLinks>
        <Link href="#home">Home</Link>
        <Link href="#features">Features</Link>
        <Link href="#download">Download</Link>
        <CTAButton href="#download">Get the App</CTAButton>
      </NavLinks>
    </Nav>
  );
}
