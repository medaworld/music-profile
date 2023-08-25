import React from 'react';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
  PlatformsListContainer,
  Platforms,
  Platform,
  PFIcon,
  PFText,
} from './PlatformsListStyles';

const platforms = [
  { name: 'Spotify', icon: FaSpotify, color: '#1ED760' },
  { name: 'Apple Music', icon: FaApple, color: '#FF2D55' },
  { name: 'SoundCloud', icon: FaSoundcloud, color: '#FF5500' },
  { name: 'YouTube', icon: FaYoutube, color: '#FF0000' },
  { name: 'Amazon Music', icon: FaAmazon, color: '#4100FE' },
];

const PlatformsList: React.FC = () => {
  return (
    <PlatformsListContainer>
      <Platforms>
        {platforms.map((platform) => (
          <a
            href={`https://www.${platform.name
              .toLowerCase()
              .replace(' ', '')}.com`}
            target="_blank"
            rel="noopener noreferrer"
            key={platform.name}
          >
            <Platform color={undefined}>
              <PFIcon className="icon">
                {React.createElement(platform.icon as IconType, { size: 30 })}
              </PFIcon>
              <PFText>{platform.name}</PFText>
            </Platform>
          </a>
        ))}
      </Platforms>
    </PlatformsListContainer>
  );
};

export default PlatformsList;
