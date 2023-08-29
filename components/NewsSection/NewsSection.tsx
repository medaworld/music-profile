'use client';

import NewsList from './NewsList';
import { MoreButton, NewsContainer } from './NewsSectionStyles';
import { useContext } from 'react';
import { montserrat } from '@/styles/Fonts';
import LoadedPostsStateContext from '@/context/loadedPostsState/LoadedPostsStateContext';

export default function NewsSection() {
  const { posts, postCount, hasMorePosts, loadMorePosts } = useContext(
    LoadedPostsStateContext
  );

  return (
    <NewsContainer id="news" className={montserrat.className}>
      {postCount > 0 && (
        <>
          <NewsList posts={posts} />
          {hasMorePosts && (
            <MoreButton onClick={loadMorePosts}>More Posts</MoreButton>
          )}
        </>
      )}
    </NewsContainer>
  );
}
