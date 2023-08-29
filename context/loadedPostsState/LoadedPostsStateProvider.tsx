'use client';

import React, { useState } from 'react';
import NavLinkStateContext from './LoadedPostsStateContext';
import { getPosts } from '@/utils/fetchUtils';
import { Post, PostsData } from '@/types/types';

interface ProviderProps {
  children: React.ReactNode;
  postsData: PostsData;
}

export const LoadedPostsStateContextProvider: React.FC<ProviderProps> = ({
  children,
  postsData: initialPostsData,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPostsData?.posts || []);
  const postCount = initialPostsData?.postCount || 0;
  const NavLinkList = [
    { title: 'Music', path: 'music' },
    ...(postCount > 0 ? [{ title: 'News', path: 'news' }] : []),
  ];

  const hasMorePosts = posts.length < postCount;

  const loadMorePosts = async () => {
    try {
      const newPostsData = await getPosts(10, posts.length);
      setPosts((prevPosts) => [...prevPosts, ...newPostsData.posts]);
    } catch (error) {
      console.error('Error fetching more posts:', error);
    }
  };

  return (
    <NavLinkStateContext.Provider
      value={{ posts, postCount, hasMorePosts, loadMorePosts, NavLinkList }}
    >
      {children}
    </NavLinkStateContext.Provider>
  );
};
