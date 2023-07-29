import { createContext } from 'react';

const MediaPlayerContext = createContext({
  currentTrack: undefined,
  isPlaying: false,
  currentTime: null,
  totalDuration: null,
  play: () => {},
  pause: () => {},
  selectTrack: (audio: typeof Audio) => {},
  selectTime: (time: String) => {},
});

export default MediaPlayerContext;
