import React from 'react';
import styled from 'styled-components';

const AudioProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  span {
    font-size: 11px;
    color: $player_secondary_button_color;
  }

  .playbackTime {
    margin-right: 8px;
  }

  .playbackDuration {
    margin-left: 8px;
  }
`;

const AudioProgress = styled.input`
  width: 100%;
  height: 4px;
  outline: none;
  border-radius: 2px;
  background: linear-gradient(
      to right,
      #fe2851 0%,
      #fe2851 ${({ percent }) => percent}%,
      #eeeeee ${({ percent }) => percent}%,
      #eeeeee 100%
    )
    no-repeat;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 10px;
    width: 5px;
    border: 0;
    background: $tertiary_color;
    border-radius: 2px;
    -webkit-appearance: none;
  }
`;

interface PlayerTimeProps {
  max: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PlayerTime({ max, value, onChange }: PlayerTimeProps) {
  const percent = (value / max) * 100;

  return (
    <AudioProgressWrapper>
      <AudioProgress
        percent={percent}
        type={'range'}
        value={value}
        onChange={onChange}
        min={0}
        max={max}
        step={1}
      />
    </AudioProgressWrapper>
  );
}

export default PlayerTime;
