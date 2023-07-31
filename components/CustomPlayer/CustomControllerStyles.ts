import { styled } from 'styled-components';

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
  color: ${(props) => props.theme.light};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
