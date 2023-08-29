import { Post, PostsData } from '@/types/types';

export async function getPosts(
  limit: number,
  offset: number = 0
): Promise<PostsData> {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WORDPRESS}.wordpress.com/posts/?number=${limit}&offset=${offset}`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const postsData = data.posts.map((post: any): Post => {
    return {
      id: post.ID,
      title: post.title,
      featuredImage: post.featured_image,
      excerpt: post.excerpt.replace(' [&hellip;]', '…'),
      date: post.date,
      slug: post.slug,
    };
  });

  return {
    posts: postsData,
    postCount: data.found,
  };
}

export async function getPostData(postId: string | string[] | undefined) {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WORDPRESS}.wordpress.com/posts/${postId}`,
    {
      cache: 'no-cache',
    }
  );
  const post = await res.json();

  return {
    title: post.title,
    excerpt: post.excerpt,
    featuredImage: post.featured_image,
    date: post.date,
    content: post.content,
  };
}
