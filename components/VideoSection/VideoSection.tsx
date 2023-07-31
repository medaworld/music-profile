import styled from 'styled-components';
import VideoGrid from './VideoGrid';

const VideoContainer = styled.div`
  padding: 5% 0;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const videos = [
  'https://www.youtube.com/watch?v=qpKpmyjMT3c',
  'https://www.youtube.com/watch?v=dpsVb65QKRo',
  'https://www.youtube.com/watch?v=114pwH6sRIs',
  'https://www.youtube.com/watch?v=6NP7rdx_yZ4',
];

const VideoSection = () => {
  return (
    <VideoContainer id="video">
      <VideoGrid videos={videos} />
    </VideoContainer>
  );
};

export default VideoSection;
