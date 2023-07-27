import React from 'react';
import SocialsList from '../SocialsList/SocialsList';
import {
  FooterContainer,
  FooterList,
  FooterItem,
  FooterText,
  FooterLink,
} from './FooterStyle';
import { NavLinkList } from '../../utils/dummyData';

const Footer = () => {
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
      <FooterText>
        This is a sample footer. &copy; {new Date().getFullYear()} Your Website
        Name. All rights reserved.
      </FooterText>
      <FooterText>
        Designed and Built by{' '}
        <FooterLink href="https://www.briansuruki.com/" target="_blank">
          Brian Suruki
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
