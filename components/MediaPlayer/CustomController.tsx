import { useContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import { formatSeconds } from '../../utils/formatUtils';
import { montserrat } from '../../styles/Fonts';

import {
  FaPause,
  FaPlay,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import {
  CustomControllerContainer,
  ControllerButton,
} from './MediaPlayerStyles';

const CustomController = () => {
  const theme = useTheme();
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
    <CustomControllerContainer
      showController={showController}
      className={montserrat.className}
    >
      <div>
        {formatSeconds(mediaPlayerCtx.currentTime || 0)} /{' '}
        {formatSeconds(mediaPlayerCtx.totalDuration || 0)}
      </div>
      <div>
        <ControllerButton onClick={toggleMute}>
          {mediaPlayerCtx.isMuted ? (
            <FaVolumeMute size={20} color={theme.primary} />
          ) : (
            <FaVolumeUp size={20} color={theme.primary} />
          )}
        </ControllerButton>
        <ControllerButton onClick={handlePlayPause}>
          {mediaPlayerCtx.isPlaying ? (
            <FaPause size={20} color={theme.primary} />
          ) : (
            <FaPlay size={20} color={theme.primary} />
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
