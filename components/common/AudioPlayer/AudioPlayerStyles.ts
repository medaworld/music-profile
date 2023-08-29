import { styled } from 'styled-components';

export const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const AudioButton = styled.button<{ isPlaying: boolean }>`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: ${(props) =>
    props.isPlaying ? `var(--press)` : `var(--neumorph)`};

  &:hover {
    opacity: 0.8;
    box-shadow: ${(props) => (props.isPlaying ? `var(--press)` : `none`)};
  }

  &:active {
    box-shadow: var(--press);
  }
`;
