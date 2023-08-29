import React, { Key } from 'react';
import { SectionTitle } from '../common/Fonts';
import { Post } from '@/types/types';

import {
  NewsContainer,
  PostsContainer,
  PostContainer,
} from './NewsSectionStyles';
import NewsPost from './NewsPost';

const NewsList = ({ posts }: { posts: Post[] }) => {
  return (
    <NewsContainer>
      <SectionTitle>News</SectionTitle>

      <PostsContainer>
        {posts.map((post: Post, index: Key) => (
          <PostContainer key={index}>
            <NewsPost post={post} />
          </PostContainer>
        ))}
      </PostsContainer>
    </NewsContainer>
  );
};

export default NewsList;
