import styled from 'styled-components';

const MusicContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const MusicSection = () => {
  return (
    <MusicContainer id="music">
      <h1>Music Section</h1>
    </MusicContainer>
  );
};

export default MusicSection;
