import { styled } from 'styled-components';

export const DarkOverShadow = styled.div<{ opacity?: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.dark};
  opacity: ${(props) => (props.opacity !== undefined ? props.opacity : 0.6)};
`;
