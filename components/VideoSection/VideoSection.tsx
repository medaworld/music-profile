import styled from 'styled-components';
import VideoCarousel from './VideoCarousel';

const VideoContainer = styled.div`
  padding: 10% 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const videos = [
  'https://www.youtube.com/watch?v=IQqqtOcIQ-E',
  'https://www.youtube.com/watch?v=R4DZBZJsoEY',
];

const VideoSection = () => {
  return (
    <VideoContainer id="video">
      <VideoCarousel videos={videos} />
    </VideoContainer>
  );
};

export default VideoSection;
