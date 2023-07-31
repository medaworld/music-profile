import { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import MediaPlayerContext from '../contexts/media-player-context';
import ReactMediaPlayer from './ReactMediaPlayer';

const CustomPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 3vw;
  width: 500px;
  z-index: 5;
  background-color: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    right: 0;
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

function CustomPlayer() {
  const mediaPlayerCtx = useContext(MediaPlayerContext);

  const setPlaybackTime = (event) => {};

  useEffect(() => {
    setPlaybackTime(mediaPlayerCtx.currentTime);
  }, [mediaPlayerCtx.changeTime]);

  return (
    <CustomPlayerContainer
      style={{ visibility: mediaPlayerCtx.showVideo ? 'initial' : 'hidden' }}
    >
      <ReactMediaPlayer />
    </CustomPlayerContainer>
  );
}

export default CustomPlayer;
