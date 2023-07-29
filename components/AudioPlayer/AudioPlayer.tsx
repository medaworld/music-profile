import React, { useState, useRef, useContext } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { styled } from 'styled-components';
import PlayerTime from './PlayerTime';
import MediaPlayerContext from '../contexts/media-player-context';

const AudioPlayerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const AudioControls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AudioButton = styled.button`
  background-color: transparent;
  margin-top: 15px;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const mediaPlayerCtx = useContext(MediaPlayerContext);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = parseFloat(event.target.value);
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  return (
    <AudioPlayerContainer>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
      <AudioControls>
        <PlayerTime
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
        />
        <AudioButton onClick={handlePlayPause}>
          {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
        </AudioButton>
      </AudioControls>
    </AudioPlayerContainer>
  );
};

export default React.memo(AudioPlayer);

{
  /* <div style={{ width: '100%' }}>
          <FaVolumeUp style={{ fontSize: '16px' }} />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: '93%' }}
          />
        </div> */
}

// const [volume, setVolume] = useState(0.5);
// const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const volumeValue = parseFloat(event.target.value);
//   setVolume(volumeValue);
//   if (audioRef.current) {
//     audioRef.current.volume = volumeValue;
//   }
// };
