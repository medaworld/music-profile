import Link from 'next/link';
import React from 'react';
import { NavLinkList, SocialMediaList } from '../../utils/dummyData';
import {
  Logo,
  LogoImage,
  NavLink,
  NavLinks,
  NavbarContainer,
  SocialLink,
  SocialLinks,
} from './NavbarStyles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo href="/">
        <LogoImage src="/images/logo.png" alt="MEDA" />
      </Logo>
      <NavLinks>
        {NavLinkList.map((navLink, key) => {
          return (
            <NavLink key={key}>
              <Link href={navLink.path}>{navLink.title}</Link>
            </NavLink>
          );
        })}
      </NavLinks>
      <SocialLinks>
        {SocialMediaList.map((socialMedia, key) => {
          return (
            <SocialLink key={key}>
              <a href={socialMedia.url}>{socialMedia.icon}</a>
            </SocialLink>
          );
        })}
      </SocialLinks>
    </NavbarContainer>
  );
};

export default Navbar;
