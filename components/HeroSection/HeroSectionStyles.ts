import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  padding-top: 10rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    height: auto;
  }
`;

export const Card = styled.div`
  background-color: rgba(235, 235, 235, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;

  @media (min-width: 1440px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const PlayerSection = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const PlatformSection = styled.div`
  margin: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
