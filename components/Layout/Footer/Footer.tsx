import React, { useContext } from 'react';
import SocialsList from '../../common/SocialsList/SocialsList';
import {
  FooterContainer,
  FooterList,
  FooterItem,
  FooterText,
  FooterLink,
  WarningFooter,
} from './FooterStyle';
import MediaPlayerContext from '../../../context/mediaState/MediaStateContext';
import { montserrat } from '../../../styles/Fonts';
import useScrollToSection from '@/hooks/useScrollToSection';
import LoadedPostsStateContext from '@/context/loadedPostsState/LoadedPostsStateContext';

export default function Footer() {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const { NavLinkList } = useContext(LoadedPostsStateContext);
  const scrollTo = useScrollToSection();

  return (
    <>
      <FooterContainer className={montserrat.className}>
        <SocialsList />
        <FooterList>
          {NavLinkList.map((navLink, key) => {
            return (
              <FooterItem key={key}>
                <a
                  onClick={() => {
                    scrollTo(navLink.path);
                  }}
                >
                  {navLink.title}
                </a>
              </FooterItem>
            );
          })}
        </FooterList>
        <FooterText>© 2023 MEDA WORLD</FooterText>
        <FooterText>
          Website Designed and Built by{' '}
          <FooterLink href="https://www.briansuruki.com/" target="_blank">
            Brian Suruki
          </FooterLink>
        </FooterText>
      </FooterContainer>
      <WarningFooter
        playerOpen={mediaPlayerCtx.playerOpen}
        className={montserrat.className}
      >
        This is a site for demonstration purposes only.
      </WarningFooter>
    </>
  );
}
