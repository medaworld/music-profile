import { styled } from 'styled-components';

export const AudioPlayerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const AudioControls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AudioButton = styled.button`
  background-color: transparent;

  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const LoadButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
