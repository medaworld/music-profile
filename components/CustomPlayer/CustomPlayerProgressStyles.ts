import { styled } from 'styled-components';

export const AudioProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  transform: translateY(-2px);
`;

export const AudioProgress = styled.input`
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
