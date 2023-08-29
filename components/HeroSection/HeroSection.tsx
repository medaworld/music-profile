'use client';

import PlatformsList from './PlatformsList';
import AudioPlayer from '../common/AudioPlayer/AudioPlayer';
import {
  HeroContainer,
  Card,
  PlatformSection,
  PlayerImage,
  PlayerSection,
} from './HeroSectionStyles';
import ResponsiveImage from '../common/ResponsiveImage';
import { HeroPlayerTrackData } from '../../utils/dataUtils';

const HeroSection = () => (
  <HeroContainer id={'home'}>
    <Card>
      <PlayerSection>
        <PlayerImage>
          <ResponsiveImage
            src={HeroPlayerTrackData.image}
            alt={HeroPlayerTrackData.title}
          />
        </PlayerImage>
        <AudioPlayer audioSrc={HeroPlayerTrackData.url} />
      </PlayerSection>
      <PlatformSection>
        <PlatformsList platforms={HeroPlayerTrackData.platforms} />
      </PlatformSection>
    </Card>
  </HeroContainer>
);

export default HeroSection;
