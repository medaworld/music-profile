import styled from 'styled-components';
import NewsCarousel from './NewsCarousel';

const NewsContainer = styled.div`
  padding-top: 10% 0;
  margin-bottom: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const posts = [
  {
    title: 'New Album Release: "Inspired Visions"',
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9',
    content:
      'I am thrilled to announce the release of my latest album, "Inspired Visions." This collection of songs reflects my journey over the past year, exploring themes of creativity, passion, and self-discovery. I hope you enjoy listening as much as I enjoyed creating it...',
  },
  {
    title: 'Behind the Scenes: Creating a Masterpiece',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
    content:
      "Join me on a behind-the-scenes tour of my studio, where magic happens every day. From the first sketch to the final brush stroke, the process of creating art is both fascinating and challenging. In this post, I(')ll share some insights into my creative process and the tools I use to bring my visions to life...",
  },
  {
    title: 'Art & Community: Giving Back through Creativity',
    image:
      'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    content:
      "Art is not just a means of self-expression; it can also be a powerful tool for community building and social change. I am honored to be part of several projects that use creativity to inspire and uplift others. Whether it's painting a mural with local youth or leading workshops for aspiring artists, giving back through art is a rewarding experience...",
  },
];

const NewsSection = () => {
  return (
    <NewsContainer id="news">
      <NewsCarousel posts={posts} />
    </NewsContainer>
  );
};

export default NewsSection;
