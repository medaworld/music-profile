import React, { Key, useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionTitle } from '../common/Fonts';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import {
  VideoGridContainer,
  TitleWrapper,
  GridContainer,
  VideoWrapper,
  ButtonWrapper,
  MoreVideosButton,
} from './VideoGridStyles';
const ReactPlayer =
  process.env.NEXT_PUBLIC_ENV === 'development'
    ? dynamic(() => import('react-player'), { ssr: false })
    : require('react-player').default;

const VideoGrid = ({ videos }) => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index: Key, video: string) => {
    if (mediaPlayerCtx.isPlaying) {
      mediaPlayerCtx.pause();
    }
    mediaPlayerCtx.hidePlayer();
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
              onPlay={() => handlePlay(index, video)}
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
