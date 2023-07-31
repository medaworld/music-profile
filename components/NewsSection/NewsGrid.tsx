import styled from 'styled-components';
import dynamic from 'next/dynamic';
import React from 'react';
import { SectionTitle } from '../styles/Fonts';
import { DarkOverShadow } from '../styles/DarkOverShadow';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoGridContainer = styled.div``;

const GridContainer = styled.div`
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

const PostWrapper = styled.div<{ backgroundImage: string }>`
  position: relative;
  padding-top: 56.25%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.light};
  overflow: hidden;
`;

const PostContentWrapper = styled.div`
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

const PostTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 10px 0;

  @media (min-width: 768px) and (max-width: 950px) {
    font-size: 18px;
  }
`;

const PostContent = styled.p`
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

const MoreButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 20px auto;
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

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const ReadMoreLink = styled.a`
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

const NewsGrid = ({ posts }) => {
  return (
    <VideoGridContainer>
      <TitleWrapper>
        <SectionTitle>NEWS</SectionTitle>
      </TitleWrapper>
      <GridContainer>
        {posts.map((post, index) => (
          <PostWrapper key={index} backgroundImage={post.image}>
            <DarkOverShadow />
            <PostContentWrapper>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <ReadMoreLink
                href={`https://www.example.com/posts/${index}`}
                target="_blank"
              >
                Read More
              </ReadMoreLink>
            </PostContentWrapper>
          </PostWrapper>
        ))}
      </GridContainer>
      <ButtonWrapper>
        <MoreButton href="https://www.example.com" target="_blank">
          More Posts
        </MoreButton>
      </ButtonWrapper>
    </VideoGridContainer>
  );
};

export default NewsGrid;
