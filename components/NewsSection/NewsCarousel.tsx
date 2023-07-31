import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { SectionTitle } from '../styles/Fonts';

export const NewsCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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
    .slick-prev {
      width: 30%;
      z-index: 1;
    }
    .slick-next {
      width: 30%;
      z-index: 1;
    }
  }
`;

const PostWrapper = styled.div`
  position: relative;
  padding: 20px;
  height: 200px; // Adjust as needed
  background-color: black;
  color: white; // Adjust text color as needed
`;

const PostBackground = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.2;
`;

const PostTitle = styled.h3`
  font-size: 24px; // Adjust as needed
  margin: 0 0 10px 0;
  z-index: 2;
`;

const PostContent = styled.p`
  max-width: 70%; // Adjust as needed
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NewsCarousel = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <NewsCarouselContainer>
      <SectionTitle>NEWS</SectionTitle>
      <Slider {...settings}>
        {posts.map((post, index) => (
          <PostWrapper key={index}>
            <PostBackground backgroundImage={post.image} />
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostWrapper>
        ))}
      </Slider>
    </NewsCarouselContainer>
  );
};

export default NewsCarousel;
