import { styled } from 'styled-components';

export const VideoGridContainer = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1500px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

export const MoreVideosButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 40px 0 0 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.tplight};
  color: ${(props) => props.theme.light};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.tpdark};
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
