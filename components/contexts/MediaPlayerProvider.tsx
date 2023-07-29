import { useReducer, useState } from 'react';
import MediaPlayerContext from './media-player-context';

interface mediaState {
  isPlaying: boolean;
  currentTrack: typeof Audio | undefined;
  currentTime: null | number;
  totalDuration: null | number;
}

type Action =
  | { type: 'PLAY' }
  | { type: 'PAUSE' }
  | { type: 'CHANGETRACK'; audio: typeof Audio }
  | { type: 'CHANGETIME'; time: String };

const defaultMediaPlayerState = {
  isPlaying: false,
  currentTrack: undefined,
  totalDuration: null,
  currentTime: null,
};

const mediaPlayerReducer = (state: mediaState, action: Action) => {
  if (action.type === 'PLAY') {
    return {
      isPlaying: true,
      currentTrack: state.currentTrack,
      totalDuration: state.totalDuration,
      currentTime: state.currentTime,
    };
  }
  if (action.type === 'PAUSE') {
    return {
      isPlaying: false,
      currentTrack: state.currentTrack,
      totalDuration: state.totalDuration,
      currentTime: state.currentTime,
    };
  }
  if (action.type === 'CHANGETRACK') {
    const newTrack = action.audio;
    return {
      isPlaying: true,
      currentTrack: newTrack,
      totalDuration: state.totalDuration,
      currentTime: state.currentTime,
    };
  }
  if (action.type === 'CHANGETIME') {
    return {
      isPlaying: true,
      currentTrack: state.currentTrack,
      totalDuration: state.totalDuration,
      currentTime: state.currentTime,
    };
  }
};

export const MediaPlayerProvider = ({ children }) => {
  const [mediaPlayerState, dispatchMediaPlayerAction] = useReducer(
    mediaPlayerReducer,
    defaultMediaPlayerState
  );

  const playMediaHandler = () => {
    dispatchMediaPlayerAction({ type: 'PLAY' });
  };

  const pauseMediaHandler = () => {
    dispatchMediaPlayerAction({ type: 'PAUSE' });
  };

  const selectTrack = (audio: typeof Audio) => {
    dispatchMediaPlayerAction({ type: 'CHANGETRACK', audio: audio });
  };

  const selectTime = (time: String) => {
    dispatchMediaPlayerAction({ type: 'CHANGETIME', time: time });
  };

  const mediaPlayerContext = {
    isPlaying: mediaPlayerState.isPlaying,
    currentTrack: mediaPlayerState.currentTrack,
    currentTime: mediaPlayerState.currentTime,
    totalDuration: mediaPlayerState.totalDuration,
    play: playMediaHandler,
    pause: pauseMediaHandler,
    selectTrack: selectTrack,
    selectTime: selectTime,
  };

  return (
    <MediaPlayerContext.Provider value={mediaPlayerContext}>
      {children}
    </MediaPlayerContext.Provider>
  );
};
