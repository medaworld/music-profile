import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer id={'home'}>
      <h1>Current Promo</h1>
    </HeroContainer>
  );
};

export default HeroSection;
