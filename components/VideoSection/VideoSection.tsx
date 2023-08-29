import styled from 'styled-components';
import VideoGrid from './VideoGrid';
import { videoList } from '../../utils/dataUtils';

const VideoContainer = styled.div`
  padding-top: 5%;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const VideoSection = () => {
  return (
    <VideoContainer id="video">
      <VideoGrid videos={videoList} />
    </VideoContainer>
  );
};

export default VideoSection;
