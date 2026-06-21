'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Menu, X, Grid3x3, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { LibreaLogo } from '@/components/ui/LibreaLogo';
import { useUI } from '@/components/providers/UIProvider';
import { scrollToSection } from '@/lib/scroll';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 12px;

  @media (min-width: 768px) {
    padding: 12px 18px;
  }
  @media (min-width: 1280px) {
    padding: 12px 24px;
  }
`;

const Pill = styled.nav`
  max-width: 1398px;
  margin: 0 auto;
  width: 100%;
  border-radius: var(--radius-lg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: var(--header-bg);
  border: 1px solid var(--header-border);
  box-shadow: var(--header-shadow);
  padding: 14px 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: none;
  list-style: none;
  align-items: center;
  gap: 24px;
  margin: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CTAButton = styled.button`
  display: none;
  border: none;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--button-primary-hover);
  }

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
  }
`;

const IconButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: ${({ $active }) => $active ? 'var(--bg-muted)' : 'none'};
  border: none;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--bg-muted);
  }
`;

const LocaleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 36px;
  padding: 0 8px;
  border-radius: var(--radius-sm);
  background: none;
  border: none;
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--bg-muted);
  }
`;

const BurgerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--bg-muted);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 12px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobileLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  cursor: pointer;
  text-align: left;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const MobileCTA = styled.button`
  border: none;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--button-primary-hover);
  }
`;

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { showGrid, toggleGrid } = useUI();
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === 'en' ? 'de' : 'en';
    router.push(pathname.replace(`/${locale}`, `/${next}`), { scroll: false });
  };

  const links = [
    { label: t('features'), sectionId: 'features' },
    { label: t('testimonials'), sectionId: 'testimonials' },
    { label: t('blog'), sectionId: 'blog' },
  ];

  const isHome = pathname === `/${locale}`;

  const handleClick = (sectionId: string) => {
    setOpen(false);
    if (isHome) {
      requestAnimationFrame(() => scrollToSection(sectionId));
    } else {
      window.location.href = `/${locale}#${sectionId}`;
    }
  };

  return (
    <Wrapper>
      <Pill>
        <Row>
          <LogoButton onClick={() => isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : (window.location.href = `/${locale}`)} aria-label="Librea — back to top">
            <LibreaLogo color="var(--brand)" height={30} />
          </LogoButton>

          <RightGroup>
            <NavLinks>
              {links.map((link) => (
                <li key={link.sectionId}>
                  <NavLink onClick={() => handleClick(link.sectionId)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </NavLinks>

            {process.env.NODE_ENV === 'development' && (
              <IconButton $active={showGrid} onClick={toggleGrid} aria-label="Toggle grid">
                <Grid3x3 size={16} />
              </IconButton>
            )}

            <IconButton
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </IconButton>

            <LocaleButton onClick={toggleLocale} aria-label="Switch language">
              <Globe size={15} />
              {locale === 'en' ? 'DE' : 'EN'}
            </LocaleButton>

            <CTAButton onClick={() => handleClick('download')}>
              {t('cta')}
            </CTAButton>

            <BurgerButton
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </BurgerButton>
          </RightGroup>
        </Row>

        {open && (
          <MobileMenu>
            {links.map((link) => (
              <MobileLink key={link.sectionId} onClick={() => handleClick(link.sectionId)}>
                {link.label}
              </MobileLink>
            ))}
            <MobileCTA onClick={() => handleClick('download')}>
              {t('cta')}
            </MobileCTA>
          </MobileMenu>
        )}
      </Pill>
    </Wrapper>
  );
}
