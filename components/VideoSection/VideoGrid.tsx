import styled from 'styled-components';
import dynamic from 'next/dynamic';
import React, { Key, useContext, useEffect, useState } from 'react';
import { SectionTitle } from '../styles/Fonts';
import MediaPlayerContext from '../contexts/media-player-context';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoGridContainer = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1500px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

const MoreVideosButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 40px 0 0 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.tplight};
  color: ${(props) => props.theme.light};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.tpdark};
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const VideoGrid = ({ videos }) => {
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
    setPlayingIndex(index);
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
    <VideoGridContainer>
      <TitleWrapper>
        <SectionTitle>VIDEO</SectionTitle>
      </TitleWrapper>
      <GridContainer>
        {videos.map((video: string, index: Key) => (
          <VideoWrapper key={index}>
            <ReactPlayer
              url={video}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              width="100%"
              height="100%"
              controls
              playing={playingIndex === index}
              onPlay={() => handlePlay(index)}
              onPause={handlePause}
            />
          </VideoWrapper>
        ))}
      </GridContainer>
      <ButtonWrapper>
        <MoreVideosButton href="https://www.youtube.com" target="_blank">
          More Videos
        </MoreVideosButton>
      </ButtonWrapper>
    </VideoGridContainer>
  );
};

export default VideoGrid;
