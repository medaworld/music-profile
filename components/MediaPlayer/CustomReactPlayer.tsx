import React, { Component, ContextType } from 'react';
import MediaPlayerContext from '../../context/mediaState/MediaStateContext';
import CustomController from './CustomController';
import CustomPlayerProgress from './CustomPlayerProgress';
import { CustomControllers, CustomVisuals } from './MediaPlayerStyles';

import dynamic from 'next/dynamic';
const ReactPlayer =
  process.env.NEXT_PUBLIC_ENV === 'development'
    ? dynamic(() => import('react-player'), { ssr: false })
    : require('react-player').default;

class CustomReactPlayer extends Component {
  static contextType = MediaPlayerContext;
  declare context: ContextType<typeof MediaPlayerContext>;

  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    isMobile: false,
  };

  load = (url: any) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && window.navigator) {
      this.setState({
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
      });
    }
  }

  handlePlay = () => {
    this.context.play();
    if (!this.state.isMobile) {
      this.context.unmute();
    }
  };

  handlePause = () => {
    this.context.pause();
  };

  handleSeekMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ played: parseFloat(target.value) });
  };

  handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    this.setState({ seeking: false });
    const target = e.target as HTMLInputElement;
    this.player.seekTo(parseFloat(target.value));
  };

  handleProgress = (state: { loaded: any; playedSeconds: number }) => {
    this.context.updateProgress(state.playedSeconds);

    if (state.playedSeconds < 3 && this.player) {
      const duration = this.player.getDuration();
      this.context.updateDuration(duration);
    }

    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleDuration = (duration: number) => {
    if (duration) {
      this.context.updateDuration(duration);
    }
  };

  handleEnded = () => {
    this.context.pause();
  };

  renderLoadButton = (url: string, label: string) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player: any) => {
    this.player = player;
  };
  player: any;

  render() {
    const { controls, light, volume, loop, played, playbackRate, pip } =
      this.state;

    return (
      <>
        <CustomVisuals className="app">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            style={{ position: 'absolute', top: 0, left: 0 }}
            width="100%"
            height="100%"
            url={this.context.currentTrack?.src}
            pip={pip}
            playing={this.context.isPlaying}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={this.context.isMuted}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onEnded={this.handleEnded}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />
        </CustomVisuals>
        <CustomControllers>
          <CustomPlayerProgress
            played={played}
            handleSeekMouseDown={this.handleSeekMouseDown}
            handleSeekChange={this.handleSeekChange}
            handleSeekMouseUp={this.handleSeekMouseUp}
          />
          <CustomController />
        </CustomControllers>
      </>
    );
  }
}

export default CustomReactPlayer;
