import PlatformsList from '../PlatformsList/PlatformsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../common/Fonts';
import {
  Card,
  HeroContainer,
  PlatformSection,
  PlayerImage,
  PlayerSection,
} from './HeroSectionStyles';
import ResponsiveImage from '../common/ResponsiveImage';

const trackUrl = 'https://www.youtube.com/watch?v=QA8CU6WeH44';

const HeroSection = () => (
  <HeroContainer id={'home'}>
    <Card>
      <PlayerSection>
        <PlayerImage>
          <ResponsiveImage src={'/images/views.jpg'} alt={'Her Loss'} />
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
