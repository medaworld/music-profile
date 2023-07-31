import Image from 'next/image';
import PlatformsList from '../PlatformsList/PlatformsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../styles/Fonts';
import {
  Card,
  HeroContainer,
  ImageWrapper,
  PlatformSection,
  PlayerSection,
} from './HeroSectionStyles';

const trackUrl = 'https://www.youtube.com/watch?v=IQqqtOcIQ-E';

const HeroSection = () => (
  <HeroContainer id={'home'}>
    <SectionTitle>OUT NOW</SectionTitle>
    <Card>
      <PlayerSection>
        <ImageWrapper>
          <Image
            src="/images/albumartmock.jpg"
            alt="Album Art"
            width={250}
            height={250}
            layout="responsive"
            priority
          />
        </ImageWrapper>
        <AudioPlayer audioSrc={trackUrl} />
      </PlayerSection>
      <PlatformSection>
        <PlatformsList />
      </PlatformSection>
    </Card>
  </HeroContainer>
);

export default HeroSection;
