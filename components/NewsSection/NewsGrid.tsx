import React, { Key } from 'react';
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

interface PostProps {
  title: string;
  image: string;
  content: string;
}

const NewsGrid = ({ posts }) => {
  return (
    <VideoGridContainer>
      <TitleWrapper>
        <SectionTitle>NEWS</SectionTitle>
      </TitleWrapper>
      <GridContainer>
        {posts.map((post: PostProps, index: Key) => (
          <PostWrapper key={index} backgroundImage={post.image}>
            <DarkOverShadow opacity={0.7} />
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
