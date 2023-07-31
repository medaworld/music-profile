import { Key, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../styles/Fonts';

const MusicCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  width: 100%;

  .slick-slider {
    width: 50%;
    overflow: hidden;
    max-width: 1000px;
  }
  .slick-prev {
    width: 20%;
    z-index: 1;
  }
  .slick-next {
    width: 20%;
    z-index: 1;
  }
  @media (max-width: 768px) {
    .slick-slider {
      width: 100%;
    }
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  padding-top: 100%;
  align-items: center;
`;

const Buttons = styled.div`
  position: absolute;
  left: -200px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: left 0.5s ease;
`;

const SlideContent = styled.div<{ albumArt: string }>`
  background-image: url(${(props) => props.albumArt});
  background-size: cover; // Use 'contain' to make sure the image fits inside the container
  background-repeat: no-repeat;
  background-position: center; // Center the image
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 100%;
    width: 100%;
  }

  &:hover ${Buttons} {
    left: 35px; /* The final position you want */
  }
`;

const Button = styled.button`
  bottom: 10px;
  left: 10px;
  background-color: rgba(235, 235, 235, 0.9);
  color: #333;
  border: none;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const AudioWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 15px;
`;

const ReleaseTitle = styled.div`
  position: absolute;
  left: 40px;
  top: 60%;
  font-size: 36px;
  max-width: 250px;
  font-weight: 600;
  text-transform: uppercase;
`;

const MusicCarousel = ({ releases }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  interface ReleasesProps {
    title: string;
    albumArt: string;
    spotifyUrl: string;
    appleMusicUrl: string;
    soundCloudUrl: string;
    youtubeUrl: string;
    amazonMusicUrl: string;
  }

  const sliderRef = useRef(null);

  return (
    <MusicCarouselContainer>
      <SectionTitle>MUSIC</SectionTitle>
      <Slider ref={sliderRef} {...settings}>
        {releases.map((release: ReleasesProps, index: Key) => (
          <SlideWrapper key={index}>
            <SlideContent albumArt={release.albumArt}>
              <ReleaseTitle>{release.title}</ReleaseTitle>
              <Buttons>
                <Button
                  onClick={() => (window.location.href = release.spotifyUrl)}
                >
                  <FaSpotify /> Listen Now
                </Button>
                <Button
                  onClick={() => (window.location.href = release.appleMusicUrl)}
                >
                  <FaApple /> Listen Now
                </Button>
                <Button
                  onClick={() => (window.location.href = release.soundCloudUrl)}
                >
                  <FaSoundcloud /> Listen Now
                </Button>
                <Button
                  onClick={() => (window.location.href = release.youtubeUrl)}
                >
                  <FaYoutube /> Listen Now
                </Button>
                <Button
                  onClick={() =>
                    (window.location.href = release.amazonMusicUrl)
                  }
                >
                  <FaAmazon /> Listen Now
                </Button>
              </Buttons>
              <AudioWrapper>
                <AudioPlayer
                  audioSrc={'https://www.youtube.com/watch?v=QA8CU6WeH44'}
                />
              </AudioWrapper>
            </SlideContent>
          </SlideWrapper>
        ))}
      </Slider>
    </MusicCarouselContainer>
  );
};

export default MusicCarousel;
