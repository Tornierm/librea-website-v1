'use client';

import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #5f8c5f;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #1a2123;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #5f8c5f;
  }
`;

const CTAButton = styled.a`
  background-color: #f37845;
  color: white;
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #d65a29;
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
        <CTAButton href="#download">Get App</CTAButton>
      </NavLinks>
    </Nav>
  );
}
