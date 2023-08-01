import { styled } from 'styled-components';
import { DarkOverShadow } from '../styles/DarkOverShadow';

export const MusicCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .slick-slider {
    width: 50%;
    overflow: hidden;
    max-width: 1000px;
  }
  .slick-prev {
    width: 20%;
    z-index: 1;
  }
  .slick-next {
    width: 20%;
    z-index: 1;
  }
  @media (max-width: 768px) {
    .slick-slider {
      width: 100%;
    }
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  padding-top: 100%;
  align-items: center;
`;

export const Buttons = styled.div`
  position: absolute;
  left: -200px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: left 0.5s ease;
`;

export const GridIcon = styled.div<{ img: string }>`
  background-color: ${(props) => props.theme.light};
  position: absolute;
  top: 25px;
  right: -50px;
  width: 30px;
  height: 30px;
  mask-image: url('/images/grid-icon.svg');
  -webkit-mask-image: url('/images/grid-icon.svg');
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: right 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const AudioWrapper = styled.div`
  position: absolute;
  right: -50px;
  bottom: 15px;
  transition: right 0.5s ease;
  cursor: pointer;
`;

export const ReleaseTitle = styled.div`
  position: absolute;
  left: -280px;
  top: 15px;
  font-size: 34px;
  max-width: 280px;
  font-weight: 600;
  text-transform: uppercase;
  transition: left 0.5s ease;
`;

export const SlideContent = styled.div<{ albumArt: string }>`
  background-image: url(${(props) => props.albumArt});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 100%;
    width: 100%;
  }

  &:hover ${Buttons} {
    left: 35px;
  }

  &:hover ${ReleaseTitle} {
    left: 35px;
  }

  &:hover ${GridIcon} {
    right: 35px;
  }

  &:hover ${AudioWrapper} {
    right: 25px;
  }

  ${DarkOverShadow} {
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover ${DarkOverShadow} {
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  bottom: 10px;
  left: 10px;
  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.dark};
  border: none;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const ThumbnailGrid = styled.div<{ number: number }>`
  background-color: ${(props) => props.theme.tplight};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${(props) => props.number}, 1fr);
  grid-template-rows: repeat(${(props) => props.number}, 1fr);
  grid-gap: 5px;
  height: 100%;
  width: 100%;
  padding: 5px;
`;

export const Thumbnail = styled.div<{ albumArt: string }>`
  background-image: url(${(props) => props.albumArt});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 1 / 1;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
