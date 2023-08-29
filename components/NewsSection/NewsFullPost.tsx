'use client';

import { montserrat } from '@/styles/Fonts';
import {
  NewsFullTitle,
  NewsFullContent,
  NewsFullExcerpt,
  NewsFullPostContainer,
  NewsFullMain,
  NewsFullHeader,
  NewsFullDate,
  NewsFullImage,
} from './NewsSectionStyles';
import { formatDateTime } from '@/utils/formatUtils';
import { PostData } from '@/types/types';

export default function NewsFullPost({ post }: { post: PostData }) {
  const formattedDate = formatDateTime(post.date);

  return (
    <NewsFullPostContainer className={montserrat.className}>
      <NewsFullContent>
        <NewsFullHeader>
          <NewsFullTitle dangerouslySetInnerHTML={{ __html: post.title }} />
          <NewsFullExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <NewsFullImage>
            <picture>
              <img src={post.featuredImage} alt={post.title} />
            </picture>
          </NewsFullImage>
          <NewsFullDate>{formattedDate}</NewsFullDate>
        </NewsFullHeader>
        <NewsFullMain dangerouslySetInnerHTML={{ __html: post.content }} />
      </NewsFullContent>
    </NewsFullPostContainer>
  );
}
