import React, { useContext } from 'react';
import {
  Header,
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  SocialWrapper,
} from './NavbarStyles';
import SocialsList from '../../common/SocialsList/SocialsList';
import Menu from './Menu';
import { montserrat } from '../../../styles/Fonts';
import MaskImage from '../../common/MaskImage';
import { useTheme } from 'styled-components';
import useScrollToSection from '@/hooks/useScrollToSection';
import LoadedPostsStateContext from '@/context/loadedPostsState/LoadedPostsStateContext';

export default function Navbar() {
  const theme = useTheme();
  const scrollTo = useScrollToSection();
  const { NavLinkList } = useContext(LoadedPostsStateContext);

  return (
    <Header>
      <NavbarContainer className={montserrat.className}>
        <Logo onClick={() => scrollTo('home')}>
          <MaskImage
            src={'/images/logo.png'}
            width={'30px'}
            color={theme.primary}
          />
        </Logo>
        <NavLinks>
          {NavLinkList.map((navLink, key) => {
            return (
              <NavLink key={key}>
                <a onClick={() => scrollTo(navLink.path)}>{navLink.title}</a>
              </NavLink>
            );
          })}
        </NavLinks>
        <SocialWrapper>
          <SocialsList />
        </SocialWrapper>

        <Menu />
      </NavbarContainer>
    </Header>
  );
}
