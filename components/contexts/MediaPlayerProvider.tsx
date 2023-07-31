import { useReducer } from 'react';
import MediaPlayerContext from './media-player-context';

interface mediaState {
  currentTrack: HTMLAudioElement | null;
  isPlaying: boolean;
  isMuted: boolean;
  showVideo: boolean;
  playerOpen: boolean;
  currentTime: number;
  totalDuration: number;
}

type Action =
  | { type: 'PLAY'; src: string; isVideo: boolean }
  | { type: 'PAUSE' }
  | { type: 'MUTE' }
  | { type: 'UNMUTE' }
  | { type: 'CHANGE_TIME'; time: number }
  | { type: 'UPDATE_PROGRESS'; time: number }
  | { type: 'UPDATE_DURATION'; duration: number }
  | { type: 'HIDE_VIDEO' };

const defaultMediaPlayerState = {
  currentTrack: null,
  isPlaying: false,
  isMuted: true,
  showVideo: false,
  playerOpen: false,
  currentTime: 0,
  totalDuration: 0,
};

const mediaPlayerReducer = (state: mediaState, action: Action) => {
  switch (action.type) {
    case 'PLAY':
      if (action.src) {
        const newTrack = new Audio(action.src);

        return {
          ...state,
          currentTrack: newTrack,
          isPlaying: true,
          showVideo: true,
          playerOpen: true,
        };
      } else {
        return {
          ...state,
          isPlaying: true,
          showVideo: true,
          playerOpen: true,
        };
      }

    case 'PAUSE':
      return { ...state, isPlaying: false };

    case 'MUTE':
      return { ...state, isMuted: true };

    case 'UNMUTE':
      return { ...state, isMuted: false };

    case 'CHANGE_TIME':
      return { ...state, currentTime: action.time };

    case 'UPDATE_PROGRESS':
      return { ...state, currentTime: action.time };

    case 'UPDATE_DURATION':
      return { ...state, totalDuration: action.duration };

    case 'HIDE_VIDEO':
      return { ...state, showVideo: false, playerOpen: false };

    default:
      return state;
  }
};

export const MediaPlayerProvider = ({ children }) => {
  const [mediaPlayerState, dispatchMediaPlayerAction] = useReducer(
    mediaPlayerReducer,
    defaultMediaPlayerState
  );

  const play = (src?: string, isVideo?: boolean) => {
    dispatchMediaPlayerAction({ type: 'PLAY', src, isVideo });
  };

  const pause = () => {
    dispatchMediaPlayerAction({ type: 'PAUSE' });
  };

  const mute = () => {
    dispatchMediaPlayerAction({ type: 'MUTE' });
  };

  const unmute = () => {
    dispatchMediaPlayerAction({ type: 'UNMUTE' });
  };

  const changeTime = (time: number) => {
    dispatchMediaPlayerAction({ type: 'CHANGE_TIME', time });
  };

  const updateProgress = (time: number) => {
    dispatchMediaPlayerAction({ type: 'UPDATE_PROGRESS', time });
  };

  const updateDuration = (duration: number) => {
    dispatchMediaPlayerAction({ type: 'UPDATE_DURATION', duration });
  };

  const hideVideo = () => {
    dispatchMediaPlayerAction({ type: 'HIDE_VIDEO' });
  };

  const mediaPlayerContext = {
    currentTrack: mediaPlayerState.currentTrack,
    isPlaying: mediaPlayerState.isPlaying,
    isMuted: mediaPlayerState.isMuted,
    showVideo: mediaPlayerState.showVideo,
    currentTime: mediaPlayerState.currentTime,
    totalDuration: mediaPlayerState.totalDuration,
    playerOpen: mediaPlayerState.playerOpen,
    play,
    pause,
    mute,
    unmute,
    changeTime,
    updateProgress,
    updateDuration,
    hideVideo,
  };

  return (
    <MediaPlayerContext.Provider value={mediaPlayerContext}>
      {children}
    </MediaPlayerContext.Provider>
  );
};
