import PlatformsList from '../PlatformsList/PlatformsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../styles/Fonts';
import {
  Card,
  HeroContainer,
  PlatformSection,
  PlayerImage,
  PlayerSection,
} from './HeroSectionStyles';
import ResponsiveImage from '../common/ResponsiveImage';

const trackUrl = 'https://www.youtube.com/watch?v=IQqqtOcIQ-E';

const HeroSection = () => (
  <HeroContainer id={'home'}>
    <SectionTitle>OUT NOW</SectionTitle>
    <Card>
      <PlayerSection>
        <PlayerImage>
          <ResponsiveImage src={'/images/herloss.jpg'} alt={'Her Loss'} />
        </PlayerImage>
        <AudioPlayer audioSrc={trackUrl} />
      </PlayerSection>
      <PlatformSection>
        <PlatformsList />
      </PlatformSection>
    </Card>
  </HeroContainer>
);

export default HeroSection;
