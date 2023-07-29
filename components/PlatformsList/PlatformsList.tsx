import React from 'react';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { styled } from 'styled-components';

const platforms = [
  { name: 'Spotify', icon: FaSpotify, color: '#1ED760' },
  { name: 'Apple Music', icon: FaApple, color: '#FF2D55' },
  { name: 'SoundCloud', icon: FaSoundcloud, color: '#FF5500' },
  { name: 'YouTube', icon: FaYoutube, color: '#FF0000' },
  { name: 'Amazon Music', icon: FaAmazon, color: '#4100FE' },
];

const PlatformsListContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Platforms = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Platform = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: rgba(51, 51, 51, 0.8);
  margin-bottom: 5px;
  border-radius: 10px;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgba(235, 235, 235, 0.3);
  }
`;

const PFIcon = styled.span`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(21, 21, 21, 0.8);
  color: ${(props: { color: string }) => props.color};
`;

const PFText = styled.span`
  padding-left: 10px;
  font-size: 18px;
`;

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
            <Platform>
              <PFIcon color={platform.color} className="icon">
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
