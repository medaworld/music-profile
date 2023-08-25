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
import { SectionTitle } from '../common/Fonts';
import {
  AudioWrapper,
  Button,
  Buttons,
  GridIcon,
  MusicCarouselContainer,
  ReleaseTitle,
  SlideContent,
  SlideWrapper,
  Thumbnail,
  ThumbnailGrid,
} from './MusicCarouselStyles';
import { DarkOverShadow } from '../common/DarkOverShadow';
import GridImage from '../../public/images/grid-icon.svg';
const gridSrc = GridImage.src;

const MusicCarousel = ({ releases }) => {
  const numberOfThumbnails = releases.length;
  const number = Math.ceil(Math.sqrt(numberOfThumbnails));

  const settings = {
    dots: false,
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
              <DarkOverShadow opacity={0} />
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
              <GridIcon
                img={gridSrc}
                onClick={() => sliderRef.current.slickGoTo(0)}
              />
              <AudioWrapper>
                <AudioPlayer
                  audioSrc={'https://www.youtube.com/watch?v=IQqqtOcIQ-E'}
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
