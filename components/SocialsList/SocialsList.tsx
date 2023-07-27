import Link from 'next/link';
import React from 'react';
import { SocialMediaList } from '../../utils/dummyData';
import { SocialLink, SocialLinks } from './SocialsListStyles';

const SocialsList = () => {
  return (
    <SocialLinks>
      {SocialMediaList.map((socialMedia, key) => {
        return (
          <SocialLink key={key}>
            <Link href={socialMedia.url}>{socialMedia.icon}</Link>
          </SocialLink>
        );
      })}
    </SocialLinks>
  );
};

export default SocialsList;
