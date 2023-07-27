import Link from 'next/link';
import React from 'react';
import { NavLinkList } from '../../utils/dummyData';
import {
  Logo,
  LogoImage,
  NavLink,
  NavLinks,
  NavbarContainer,
} from './NavbarStyles';
import SocialsList from '../SocialsList/SocialsList';

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
      <SocialsList />
    </NavbarContainer>
  );
};

export default Navbar;
