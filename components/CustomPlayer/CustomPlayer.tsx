import { useContext } from 'react';
import { styled } from 'styled-components';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import ReactMediaPlayer from './ReactMediaPlayer';

const CustomPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 3vw;
  width: 500px;
  z-index: 5;
  background-color: ${(props) => props.theme.tpdark};
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

  return (
    <CustomPlayerContainer
      style={{ visibility: mediaPlayerCtx.playerOpen ? 'initial' : 'hidden' }}
    >
      <ReactMediaPlayer />
    </CustomPlayerContainer>
  );
}

export default CustomPlayer;
