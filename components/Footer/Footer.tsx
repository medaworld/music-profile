import React, { useContext } from 'react';
import SocialsList from '../SocialsList/SocialsList';
import {
  FooterContainer,
  FooterList,
  FooterItem,
  FooterText,
  FooterLink,
  WarningFooter,
} from './FooterStyle';
import { NavLinkList } from '../../utils/dataUtils';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';

const Footer = () => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
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
    <>
      <FooterContainer>
        <SocialsList />
        <FooterList>
          {NavLinkList.map((navLink, key) => {
            return (
              <FooterItem key={key}>
                <a
                  onClick={() => {
                    scrollToSection(navLink.path);
                  }}
                >
                  {navLink.title}
                </a>
              </FooterItem>
            );
          })}
        </FooterList>
        <FooterText>This is a sample footer.</FooterText>
        <FooterText>
          Designed and Built by{' '}
          <FooterLink href="https://www.briansuruki.com/" target="_blank">
            Brian Suruki
          </FooterLink>
        </FooterText>
      </FooterContainer>
      <WarningFooter playerOpen={mediaPlayerCtx.playerOpen}>
        This is a mock site for demonstration purposes only. The content and
        information on this website are not real.
      </WarningFooter>
    </>
  );
};

export default Footer;
