import Image from 'next/image';
import styled from 'styled-components';
import PlatformsList from '../PlatformsList/PlatformsList';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const HeroContainer = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 3rem;
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

const PlayerSection = styled.div`
  margin: 2rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const PlatformSection = styled.div`
  margin: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const trackUrl =
  'https://s3.amazonaws.com/audio.distrokid.com/preview_44353978_18F3FF57-BFC3-4288-9EE030D9C5FD4637.mp3';

const HeroSection = () => {
  return (
    <HeroContainer id={'home'}>
      <Card>
        <PlayerSection>
          <Image
            src="/images/albumartmock.jpg"
            alt="Album Art"
            width={250}
            height={250}
            priority
          />
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
