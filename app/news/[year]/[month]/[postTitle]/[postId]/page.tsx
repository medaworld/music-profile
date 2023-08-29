import { GetStaticPaths } from 'next';
import { getPostData } from '@/utils/fetchUtils';
import NewsFullPost from '@/components/NewsSection/NewsFullPost';

export default async function PostPage({ params }: { params: any }) {
  const { postId } = params;
  const post = await getPostData(postId);

  return (
    <main>
      <NewsFullPost post={post} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://public-api.wordpress.com/rest/v1.1/sites/medavrtx.wordpress.com/posts/'
  );
  const data = await res.json();

  const paths = data.posts.map((post: any) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return {
      params: {
        year: year.toString(),
        month: month.toString().padStart(2, '0'),
        postTitle: post.slug.toString(),
        postId: post.ID.toString(),
      },
    };
  });

  return { paths, fallback: 'blocking' };
};
