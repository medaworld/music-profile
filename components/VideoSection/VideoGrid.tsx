import dynamic from 'next/dynamic';
import React, { Key, useContext, useEffect, useState } from 'react';
import { SectionTitle } from '../styles/Fonts';
import MediaPlayerContext from '../contexts/media-player-context';
import {
  VideoGridContainer,
  TitleWrapper,
  GridContainer,
  VideoWrapper,
  ButtonWrapper,
  MoreVideosButton,
} from './VideoGridStyles';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoGrid = ({ videos }) => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const [playingIndex, setPlayingIndex] = useState(null);

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
