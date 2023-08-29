import { Key, useRef } from 'react';
import Slider from 'react-slick';
import { SectionTitle } from '../common/Fonts';
import GridImage from '../../public/images/grid-icon.svg';
import { montserrat } from '../../styles/Fonts';
import MusicCarouselSlide from './MusicCarouselSlide';
import {
  MusicCarouselContainer,
  SlideWrapper,
  ThumbnailGrid,
  Thumbnail,
} from './MusicSectionStyles';
import { ReleasesProps } from '@/types/types';

const gridSrc = GridImage.src;

const MusicCarousel = ({ releases }: { releases: ReleasesProps[] }) => {
  const numberOfThumbnails = releases.length;
  const number = Math.ceil(Math.sqrt(numberOfThumbnails));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<any>(null);

  const handleThumbnailClick = (slideIndex: Key) => {
    sliderRef.current.slickGoTo(+slideIndex + 1);
  };

  return (
    <MusicCarouselContainer className={montserrat.className}>
      <SectionTitle>Music</SectionTitle>
      <Slider ref={sliderRef} {...settings}>
        <SlideWrapper>
          <ThumbnailGrid number={number}>
            {releases.map((release: ReleasesProps, index: Key) => (
              <Thumbnail
                key={index}
                albumArt={release.albumArt}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </ThumbnailGrid>
        </SlideWrapper>
        {releases.map((release: ReleasesProps, index: Key) => (
          <SlideWrapper key={index}>
            <MusicCarouselSlide release={release} sliderRef={sliderRef} />
          </SlideWrapper>
        ))}
      </Slider>
    </MusicCarouselContainer>
  );
};

export default MusicCarousel;
