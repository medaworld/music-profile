import React, { useState } from 'react';
import { NavLinkList } from '../../utils/dummyData';
import {
  HamburgerBar,
  HamburgerMenu,
  Logo,
  LogoImage,
  NavLink,
  NavLinks,
  NavbarContainer,
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
    <NavbarContainer>
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
      <SocialsList />
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerBar isOpen={isMenuOpen} />
        <HamburgerBar isOpen={isMenuOpen} />
        <HamburgerBar isOpen={isMenuOpen} />
      </HamburgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
