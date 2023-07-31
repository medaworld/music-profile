import styled from 'styled-components';
import VideoGrid from './VideoGrid';

const VideoContainer = styled.div`
  padding-top: 5%;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const videos = [
  'https://www.youtube.com/watch?v=kcfvTDhRglA',
  'https://www.youtube.com/watch?v=kehRD_pITKI',
  'https://www.youtube.com/watch?v=iv5CT_be86c',
  'https://www.youtube.com/watch?v=1JURDZFq9pY',
];

const VideoSection = () => {
  return (
    <VideoContainer id="video">
      <VideoGrid videos={videos} />
    </VideoContainer>
  );
};

export default VideoSection;
