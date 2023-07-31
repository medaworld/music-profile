import Image from 'next/image';
import styled from 'styled-components';
import PlatformsList from '../PlatformsList/PlatformsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../styles/Fonts';
const HeroContainer = styled.div`
  display: flex;
  padding-top: 10rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    height: auto;
  }
`;

const Card = styled.div`
  background-color: rgba(235, 235, 235, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 300px;

  @media (min-width: 1440px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const PlayerSection = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const PlatformSection = styled.div`
  margin: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const trackUrl = 'https://www.youtube.com/watch?v=IQqqtOcIQ-E';

const HeroSection = () => {
  return (
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
};

export default HeroSection;
