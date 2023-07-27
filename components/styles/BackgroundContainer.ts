import styled from 'styled-components';

interface BackgroundContainerProps {
  src?: String;
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  background-image: ${(props) =>
    props.src ? `url(${props.src})` : `url('/images/background.jpg')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
