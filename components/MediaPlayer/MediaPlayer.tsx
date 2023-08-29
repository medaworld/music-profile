import { useContext } from 'react';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import CustomReactPlayer from './CustomReactPlayer';
import { MediaPlayerContainer } from './MediaPlayerStyles';

export default function MediaPlayer() {
  const mediaPlayerCtx = useContext(MediaPlayerContext);

  return (
    <MediaPlayerContainer
      style={{ visibility: mediaPlayerCtx.playerOpen ? 'initial' : 'hidden' }}
    >
      <CustomReactPlayer />
    </MediaPlayerContainer>
  );
}
