import { styled } from 'styled-components';
import {
  FaPause,
  FaPlay,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import MediaPlayerContext from '../contexts/media-player-context';
import { formatSeconds } from '../../helpers/numbers';

const CustomControllerContainer = styled.div<{ showController: boolean }>`
  position: relative;
  height: 60px;
  display: ${({ showController }) => (showController ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const PlayButton = styled.button`
  background-color: transparent;
  color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const VolumeButton = styled.button`
  background-color: transparent;
  color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
const CustomController = ({}) => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const [showController, setShowController] = useState(false);

  useEffect(() => {
    if (mediaPlayerCtx.isPlaying) {
      setShowController(true);
    }
  }, [mediaPlayerCtx.isPlaying]);

  const handlePlayPause = () => {
    if (mediaPlayerCtx.isPlaying) {
      mediaPlayerCtx.pause();
    } else {
      mediaPlayerCtx.play();
    }
  };

  const toggleMute = () => {
    if (mediaPlayerCtx.isMuted) {
      mediaPlayerCtx.unmute();
    } else {
      mediaPlayerCtx.mute();
    }
  };

  const handleClose = () => {
    mediaPlayerCtx.pause();
    mediaPlayerCtx.hideVideo();
    setShowController(false);
  };

  return (
    <CustomControllerContainer showController={showController}>
      <div>
        {formatSeconds(mediaPlayerCtx.currentTime)} /{' '}
        {formatSeconds(mediaPlayerCtx.totalDuration)}
      </div>
      <div>
        <VolumeButton onClick={toggleMute}>
          {mediaPlayerCtx.isMuted ? (
            <FaVolumeMute size={20} color="white" />
          ) : (
            <FaVolumeUp size={20} color="white" />
          )}
        </VolumeButton>
        <PlayButton onClick={handlePlayPause}>
          {mediaPlayerCtx.isPlaying ? (
            <FaPause size={20} color="white" />
          ) : (
            <FaPlay size={20} color="white" />
          )}
        </PlayButton>
        <CloseButton onClick={handleClose}>
          <FaTimes size={20} />
        </CloseButton>
      </div>
    </CustomControllerContainer>
  );
};

export default CustomController;
