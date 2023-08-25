import { createContext } from 'react';

interface MediaStateContextProps {
  currentTrack: HTMLAudioElement | null;
  isPlaying: boolean;
  isMuted: boolean;
  isVideo: boolean;
  currentTime: number;
  totalDuration: number;
  playerOpen: boolean;
  play: (src?: string, isVideo?: boolean) => void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  changeTime: (time: number) => void;
  updateProgress: (time: number) => void;
  updateDuration: (duration: number) => void;
  hidePlayer: () => void;
}

const MediaStateContext = createContext<MediaStateContextProps>({
  currentTrack: undefined,
  isPlaying: false,
  isMuted: true,
  isVideo: false,
  currentTime: undefined,
  totalDuration: undefined,
  playerOpen: false,
  play: (src: string) => {},
  pause: () => {},
  mute: () => {},
  unmute: () => {},
  changeTime: (time: number) => {},
  updateProgress: (time: number) => {},
  updateDuration: (duration: number) => {},
  hidePlayer: () => {},
});

export default MediaStateContext;
