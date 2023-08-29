import React from 'react';
import { IconType } from 'react-icons/lib';
import {
  PlatformsListContainer,
  Platforms,
  Platform,
  PlatformIcon,
  PlatformText,
} from './PlatformsListStyles';
import { PlatformType } from '../../types/types';
import { montserrat } from '../../styles/Fonts';

const PlatformsList = ({ platforms }: { platforms: PlatformType[] }) => {
  return (
    <PlatformsListContainer>
      <Platforms>
        {platforms.map((platform) => (
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            key={platform.title}
          >
            <Platform>
              <PlatformIcon className="icon">
                {React.createElement(platform.icon as IconType, { size: 30 })}
              </PlatformIcon>
              <PlatformText className={montserrat.className}>
                {platform.title}
              </PlatformText>
            </Platform>
          </a>
        ))}
      </Platforms>
    </PlatformsListContainer>
  );
};

export default PlatformsList;
