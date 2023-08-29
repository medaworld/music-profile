import { Post } from '@/types/types';
import {
  PostTitle,
  PostContent,
  PostImage,
  PostExcerpt,
  PostDate,
} from './NewsSectionStyles';
import { formatDateTime } from '@/utils/formatUtils';
import Link from 'next/link';

export default function NewsPost({ post }: { post: Post }) {
  const date = new Date(post.date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const formattedDate = formatDateTime(post.date);
  const processedExcerpt = post.excerpt.replace(' [&hellip;]', '…');

  return (
    <>
      <PostImage>
        <Link href={`/news/${year}/${month}/${post.slug}/${post.id}`}>
          <picture>
            <img src={post.featuredImage} alt={post.title} />
          </picture>
        </Link>
      </PostImage>
      <PostContent>
        <PostDate>{formattedDate}</PostDate>
        <Link href={`/news/${year}/${month}/${post.slug}/${post.id}`}>
          <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
        </Link>
        <PostExcerpt dangerouslySetInnerHTML={{ __html: processedExcerpt }} />
      </PostContent>
    </>
  );
}
