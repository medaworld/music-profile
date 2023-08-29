import { styled } from 'styled-components';

export const MediaPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 3vw;
  width: 500px;
  z-index: 3;
  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    right: 0;
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

export const CustomVisuals = styled.div`
  position: relative;
  padding-top: 0.5px;
  visibility: hidden;

  @media (max-width: 768px) {
    padding-top: 0.5px;
    visibility: hidden;
  }
`;

export const CustomControllers = styled.div`
  position: relative;
`;

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
    width: 5px;
    border: 0;
    background: ${(props) => props.theme.primary};
    border-radius: 2px;
    -webkit-appearance: none;
  }
`;

export const CustomControllerContainer = styled.div<{
  showController: boolean;
}>`
  position: relative;
  height: 60px;
  display: ${({ showController }) => (showController ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const ControllerButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
