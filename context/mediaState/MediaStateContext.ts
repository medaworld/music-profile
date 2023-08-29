import { MediaStateContextProps } from '@/types/types';
import { createContext } from 'react';

const MediaStateContext = createContext<MediaStateContextProps>({
  currentTrack: null,
  isPlaying: false,
  isMuted: true,
  isVideo: false,
  currentTime: null,
  totalDuration: null,
  playerOpen: false,
  play: () => {},
  pause: () => {},
  mute: () => {},
  unmute: () => {},
  changeTime: () => {},
  updateProgress: () => {},
  updateDuration: () => {},
  hidePlayer: () => {},
});

export default MediaStateContext;
