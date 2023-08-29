import { IconType } from 'react-icons/lib';

export interface PlatformType {
  title: string;
  icon: IconType;
  url: string;
}

export interface ReleasesProps {
  title: string;
  albumArt: string;
  url: string;
  spotify?: string;
  appleMusic?: string;
  soundCloud?: string;
  youtube?: string;
  amazonMusic?: string;
  bandcamp?: string;
}

export interface MediaStateContextProps {
  currentTrack: HTMLAudioElement | null;
  isPlaying: boolean;
  isMuted: boolean;
  isVideo: boolean;
  currentTime: number | null;
  totalDuration: number | null;
  playerOpen: boolean;
  play: (src?: string, isVideo?: boolean) => void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  changeTime: (time: number) => void;
  updateProgress: (time: number) => void;
  updateDuration: (duration: number) => void;
  hidePlayer: () => void;
}

export type Post = {
  id: number;
  title: string;
  featuredImage: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type PostsData = {
  posts: Post[];
  postCount: number;
};

export type PostData = {
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  content: string;
};

export interface LoadedPostsStateContextProps {
  posts: Post[];
  postCount: number;
  hasMorePosts: boolean;
  loadMorePosts: () => void;
  NavLinkList: { title: string; path: string }[];
}

export interface ProviderProps {
  children: React.ReactNode;
}
