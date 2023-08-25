import React, { useContext } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import { AudioButton, AudioPlayerContainer } from './AudioPlayerStyles';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const mediaPlayerCtx = useContext(MediaPlayerContext);
  const isCurrentTrack = mediaPlayerCtx.currentTrack?.src === audioSrc;

  const handlePlayPause = () => {
    if (mediaPlayerCtx.isPlaying && isCurrentTrack) {
      mediaPlayerCtx.pause();
    } else {
      mediaPlayerCtx.play(audioSrc);
    }
  };

  return (
    <AudioPlayerContainer>
      <AudioButton onClick={handlePlayPause}>
        {mediaPlayerCtx.isPlaying && isCurrentTrack ? (
          <FaPause size={30} />
        ) : (
          <FaPlay size={30} />
        )}
      </AudioButton>
    </AudioPlayerContainer>
  );
};

export default React.memo(AudioPlayer);
