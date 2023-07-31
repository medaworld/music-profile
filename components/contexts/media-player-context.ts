import { createContext } from 'react';

interface MediaPlayerContextProps {
  currentTrack: HTMLAudioElement | null;
  isPlaying: boolean;
  isMuted: boolean;
  showVideo: boolean;
  currentTime: number;
  totalDuration: number;
  play: (src?: string, isVideo?: boolean) => void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  changeTime: (time: number) => void;
  updateProgress: (time: number) => void;
  updateDuration: (duration: number) => void;
  hideVideo: () => void;
}

const MediaPlayerContext = createContext<MediaPlayerContextProps>({
  currentTrack: undefined,
  isPlaying: false,
  isMuted: true,
  showVideo: false,
  currentTime: undefined,
  totalDuration: undefined,
  play: (src: string) => {},
  pause: () => {},
  mute: () => {},
  unmute: () => {},
  changeTime: (time: number) => {},
  updateProgress: (time: number) => {},
  updateDuration: (duration: number) => {},
  hideVideo: () => {},
});

export default MediaPlayerContext;
