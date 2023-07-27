import Image from 'next/image';
import styled from 'styled-components';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const HeroContainer = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: center;
`;

const Card = styled.div`
  background-color: rgba(235, 235, 235, 0.5);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  height: 3rem;
  font-size: 16px;
  margin-top: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  border: none;
  border-radius: 10px;
`;

const HeroSection = () => {
  return (
    <HeroContainer id={'home'}>
      <h1>
        <Card>
          <Image
            src="/images/albumartmock.jpg"
            alt="Album Art"
            width={300}
            height={300}
          />
          <MusicPlayer></MusicPlayer>
          <Button>Out Now</Button>
        </Card>
      </h1>
    </HeroContainer>
  );
};

export default HeroSection;
