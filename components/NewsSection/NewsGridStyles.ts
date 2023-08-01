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

export const PostWrapper = styled.div<{ backgroundImage: string }>`
  position: relative;
  padding-top: 56.25%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.light};
  overflow: hidden;
`;

export const PostContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PostTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 10px 0;

  @media (min-width: 768px) and (max-width: 950px) {
    font-size: 18px;
  }
`;

export const PostContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  max-height: 4.5em;

  @media (min-width: 768px) and (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const MoreButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.tplight};
  color: ${(props) => props.theme.light};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  margin: 20px 0;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const ReadMoreLink = styled.a`
  color: ${(props) => props.theme.light};
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    font-size: 0.8rem;
  }
`;
