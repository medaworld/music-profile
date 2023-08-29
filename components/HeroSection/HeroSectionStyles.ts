import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: var(--spacebetween);

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: var(--cardBorderRadius);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
  min-width: 680px;
  max-width: 930px;
  box-shadow: var(--neumorph);

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

export const PlayerImage = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 350px;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 20px;
  box-shadow: var(--neumorph);

  @media (max-width: 768px) {
    min-width: 0;
    max-width: none;
    padding: 15px;
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
