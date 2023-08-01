import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.tplight};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
  min-width: 680px;
  max-width: 930px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-width: 0;
    max-width: 370px;
    width: 100%;
    margin: 0;
    padding: 0 5%;
  }
`;

export const PlayerImage = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 350px;

  @media (max-width: 768px) {
    min-width: 0;
    max-width: none;
    padding: 0 20px;
  }
`;

export const PlayerSection = styled.div`
  margin: 2rem;
  width: 50%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 0;
    width: 100%;
  }
`;

export const PlatformSection = styled.div`
  margin: 2rem;
  width: 50%;
  min-width: 280px;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    min-width: 0;
    max-width: none;
    width: 100%;
  }
`;
