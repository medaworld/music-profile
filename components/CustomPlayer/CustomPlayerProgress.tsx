import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaPlayerContext from '../contexts/media-player-context';

const AudioProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  transform: translateY(-2px);
`;

const AudioProgress = styled.input`
  width: 100%;
  height: 2px;
  outline: none;
  transform: scaleX(1.01);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
    height: 15px;
  }

  &::-webkit-slider-thumb {
    /* height: 10px; */
    width: 5px;
    border: 0;
    background: #eee;
    border-radius: 2px;
    -webkit-appearance: none;
    /* transform: translateY(2px); */
  }
`;

function CustomPlayerProgress({
  played,
  handleSeekMouseDown,
  handleSeekChange,
  handleSeekMouseUp,
}) {
  const [progressBarStyle, setProgressBarStyle] = useState({});

  useEffect(() => {
    setProgressBarStyle({
      background: `linear-gradient(
          to right,
          #fe2851 0%,
          #fe2851 ${played * 100}%,
          #eeeeee ${played * 100}%,
          #eeeeee 100%
        ) no-repeat`,
    });
  }, [played]);

  return (
    <AudioProgressWrapper>
      <AudioProgress
        style={progressBarStyle}
        type={'range'}
        min={0}
        max={0.999999}
        step={'any'}
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
    </AudioProgressWrapper>
  );
}

export default CustomPlayerProgress;
