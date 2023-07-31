import { Key, useRef } from 'react';
import Slider from 'react-slick';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { SectionTitle } from '../styles/Fonts';
import {
  AudioWrapper,
  Button,
  Buttons,
  MusicCarouselContainer,
  ReleaseTitle,
  SlideContent,
  SlideWrapper,
  Thumbnail,
  ThumbnailGrid,
} from './MusicCarouselStyles';

const MusicCarousel = ({ releases }) => {
  const numberOfThumbnails = releases.length;
  const number = Math.ceil(Math.sqrt(numberOfThumbnails));

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

  const handleThumbnailClick = (slideIndex: Key) => {
    sliderRef.current.slickGoTo(+slideIndex + 1);
  };

  return (
    <MusicCarouselContainer>
      <SectionTitle>MUSIC</SectionTitle>
      <Slider ref={sliderRef} {...settings}>
        <SlideWrapper>
          <ThumbnailGrid number={number}>
            {releases.map((release: ReleasesProps, index: Key) => (
              <Thumbnail
                key={index}
                albumArt={release.albumArt}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </ThumbnailGrid>
        </SlideWrapper>
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
