import { useContext, useEffect, useState } from 'react';
import {
  FaPause,
  FaPlay,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import MediaPlayerContext from '../contexts/media-player-context';
import { formatSeconds } from '../../helpers/numbers';
import {
  CustomControllerContainer,
  ControllerButton,
} from './CustomControllerStyles';

const CustomController = () => {
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
    mediaPlayerCtx.hidePlayer();
    setShowController(false);
  };

  return (
    <CustomControllerContainer showController={showController}>
      <div>
        {formatSeconds(mediaPlayerCtx.currentTime)} /{' '}
        {formatSeconds(mediaPlayerCtx.totalDuration)}
      </div>
      <div>
        <ControllerButton onClick={toggleMute}>
          {mediaPlayerCtx.isMuted ? (
            <FaVolumeMute size={20} color="white" />
          ) : (
            <FaVolumeUp size={20} color="white" />
          )}
        </ControllerButton>
        <ControllerButton onClick={handlePlayPause}>
          {mediaPlayerCtx.isPlaying ? (
            <FaPause size={20} color="white" />
          ) : (
            <FaPlay size={20} color="white" />
          )}
        </ControllerButton>
        <ControllerButton onClick={handleClose}>
          <FaTimes size={20} />
        </ControllerButton>
      </div>
    </CustomControllerContainer>
  );
};

export default CustomController;
