import { styled } from 'styled-components';

export const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const AudioButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.light};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
