import React from 'react';
import SocialsList from '../SocialsList/SocialsList';
import Link from 'next/link';
import {
  FooterContainer,
  FooterList,
  FooterItem,
  FooterText,
  FooterLink,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialsList />
      <FooterList>
        <FooterItem>
          <Link href="/">Music</Link>
        </FooterItem>
        <FooterItem>
          <Link href="/">Videos</Link>
        </FooterItem>
        <FooterItem>
          <Link href="/">News</Link>
        </FooterItem>
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
