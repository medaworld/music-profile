import styled from 'styled-components';

const VideoContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-color: transparent;
`;

const VideoSection = () => {
  return (
    <VideoContainer id="video">
      <h1>Video Section</h1>
    </VideoContainer>
  );
};

export default VideoSection;
