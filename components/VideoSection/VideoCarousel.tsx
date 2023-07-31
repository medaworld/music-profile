import React, { Key, useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { SectionTitle } from '../styles/Fonts';
import dynamic from 'next/dynamic';
import { styled } from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import MediaPlayerContext from '../contexts/media-player-context';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const VideoCarouselContainer = styled.div`
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
    .slick-prev {
      width: 30%;
      z-index: 1;
    }
    .slick-next {
      width: 30%;
      z-index: 1;
    }
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 56.25%;
  align-items: center;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.light};
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  outline: none;

  // Add space as needed
  padding: 10px;

  &:hover {
    color: ${(props) => props.theme.grey};
  }
`;

const VideoCarousel = ({ videos }) => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const [playingIndex, setPlayingIndex] = useState(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePlay = (index: Key) => {
    if (mediaPlayerCtx.isPlaying) {
      mediaPlayerCtx.pause();
    }
    setPlayingIndex(index); // Start playing the video in the carousel
  };

  const handlePause = () => {
    setPlayingIndex(null);
  };

  useEffect(() => {
    if (mediaPlayerCtx.isPlaying) {
      setPlayingIndex(null);
    }
  }, [mediaPlayerCtx.isPlaying]);

  return (
    <VideoCarouselContainer>
      <SectionTitle>VIDEO</SectionTitle>
      <Slider {...settings}>
        {videos.map((video: string, index: Key) => (
          <SlideWrapper key={index}>
            <VideoWrapper>
              <ReactPlayer
                url={video}
                controls
                playing={playingIndex === index}
                onPlay={() => handlePlay(index)}
                onPause={handlePause}
              />
            </VideoWrapper>
          </SlideWrapper>
        ))}
      </Slider>
    </VideoCarouselContainer>
  );
};

export default VideoCarousel;
