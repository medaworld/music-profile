import React, { useState } from 'react';
import { NavLinkList } from '../../utils/dataUtils';
import {
  HamburgerBar,
  HamburgerMenu,
  Logo,
  LogoImage,
  NavLink,
  NavLinks,
  NavbarContainer,
  SocialWrapper,
} from './NavbarStyles';
import SocialsList from '../SocialsList/SocialsList';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <NavbarContainer isOpen={isMenuOpen}>
      <Logo onClick={() => scrollToSection('home')}>
        <LogoImage src="/images/logo.png" alt="MEDA" />
      </Logo>
      <NavLinks isOpen={isMenuOpen}>
        {NavLinkList.map((navLink, key) => {
          return (
            <NavLink key={key}>
              <a onClick={() => scrollToSection(navLink.path)}>
                {navLink.title}
              </a>
            </NavLink>
          );
        })}
      </NavLinks>
      <SocialWrapper isOpen={isMenuOpen}>
        <SocialsList />
      </SocialWrapper>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerBar isOpen={isMenuOpen} />
        <HamburgerBar isOpen={isMenuOpen} />
        <HamburgerBar isOpen={isMenuOpen} />
      </HamburgerMenu>
    </NavbarContainer>
  );
};

export default React.memo(Navbar);
