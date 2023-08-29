import { LoadedPostsStateContextProps } from '@/types/types';
import { createContext } from 'react';

const LoadedPostsStateContext = createContext<LoadedPostsStateContextProps>({
  posts: [],
  postCount: 0,
  hasMorePosts: true,
  loadMorePosts: () => {},
  NavLinkList: [],
});

export default LoadedPostsStateContext;
