import styled from 'styled-components';
import NewsGrid from './NewsGrid';

const NewsContainer = styled.div`
  padding-top: 5%;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const posts = [
  {
    title: 'New Album Release: "Inspired Visions"',
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229',
    content:
      'I am thrilled to announce the release of my latest album, "Inspired Visions." This collection of songs reflects my journey over the past year, exploring themes of creativity, passion, and self-discovery. I hope you enjoy listening as much as I enjoyed creating it...',
  },
  {
    title: 'Behind the Scenes: Creating a Masterpiece',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625',
    content:
      "Join me on a behind-the-scenes tour of my studio, where magic happens every day. From the first sketch to the final brush stroke, the process of creating art is both fascinating and challenging. In this post, I(')ll share some insights into my creative process and the tools I use to bring my visions to life...",
  },
  {
    title: 'Art & Community: Giving Back through Creativity',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
    content:
      "Art is not just a means of self-expression; it can also be a powerful tool for community building and social change. I am honored to be part of several projects that use creativity to inspire and uplift others. Whether it's painting a mural with local youth or leading workshops for aspiring artists, giving back through art is a rewarding experience...",
  },
  {
    title: 'On the Road: Memories from the "Unplugged Tour"',
    image: 'https://images.unsplash.com/photo-1625720400246-2661444674b9',
    content:
      'Touring is always an adventure, and the "Unplugged Tour" has been no exception. From unforgettable fan encounters to the raw energy of performing live, each city has offered its unique flavor. In this post, I will take you behind the scenes of our latest shows, sharing some personal highlights and memories that have made this tour one for the books...',
  },
];

const NewsSection = () => {
  return (
    <NewsContainer id="news">
      <NewsGrid posts={posts} />
    </NewsContainer>
  );
};

export default NewsSection;
