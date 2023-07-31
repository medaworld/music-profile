import dynamic from 'next/dynamic';
import React from 'react';
import { SectionTitle } from '../styles/Fonts';
import { DarkOverShadow } from '../styles/DarkOverShadow';
import {
  ButtonWrapper,
  GridContainer,
  MoreButton,
  PostContent,
  PostContentWrapper,
  PostTitle,
  PostWrapper,
  ReadMoreLink,
  TitleWrapper,
  VideoGridContainer,
} from './NewsGridStyles';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

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
