import React from 'react';
import { SocialMediaList } from '@/utils/dataUtils';
import { SocialLink, SocialLinks } from './SocialsListStyles';
import { facebookLinkHandler } from '@/utils/linkUtils';

const SocialsList = () => {
  return (
    <SocialLinks>
      {SocialMediaList.map((socialMedia, key) => {
        let url = socialMedia.url;
        if (socialMedia.case === 'facebook') {
          return (
            <SocialLink key={key}>
              <a onClick={() => facebookLinkHandler(socialMedia.handle!)}>
                {socialMedia.icon}
              </a>
            </SocialLink>
          );
        } else {
          return (
            <SocialLink key={key}>
              <a href={url} target="_blank">
                {socialMedia.icon}
              </a>
            </SocialLink>
          );
        }
      })}
    </SocialLinks>
  );
};

export default SocialsList;
