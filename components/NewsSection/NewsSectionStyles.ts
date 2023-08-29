import Link from 'next/link';
import { styled } from 'styled-components';

export const NewsContainer = styled.div`
  padding-top: var(--sectionspace);
  margin: 0 auto;
  text-align: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const PostsContainer = styled.div`
  align-items: center;
  margin: 0 auto;
  width: auto;
  max-width: 1000px;
  background-color: ${(props) => props.theme.background};
  border-radius: var(--cardBorderRadius);
  box-shadow: var(--neumorph);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const PostContainer = styled.div`
  position: relative;
  color: ${(props) => props.theme.primary};
  display: flex;
  gap: 2rem;
  margin: 0 2rem;
  padding: 2rem 0;
  max-height: 400px;
  border-bottom: 1px solid ${(props) => props.theme.primary};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: unset;

    div {
      width: 100%;
    }
  }
`;

export const PostImage = styled.div`
  width: 40%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 0;

    img {
      max-height: 380px;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const PostContent = styled.div`
  width: 60%;
  text-align: start;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const PostDate = styled.div`
  font-size: 14px;
`;

export const PostTitle = styled.h3`
  font-size: clamp(24px, 2vw, 30px);
  margin: 5px 0 10px 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const PostExcerpt = styled.div`
  font-size: clamp(18px, 2vw, 20px);
  max-height: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const MoreButton = styled.button`
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-decoration: none;
  font-weight: bold;
  border-radius: var(--cardBorderRadius);
  box-shadow: var(--neumorph);
  cursor: pointer;
  align-self: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const NewsFullPostContainer = styled.div`
  padding: 100px 0;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 100px 1rem;
  }
`;

export const NewsFullContent = styled.div`
  width: 100%;
`;

export const NewsFullHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;
`;

export const NewsFullTitle = styled.h1`
  font-size: 38px;
  margin: 0;
  padding: 0 15px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const NewsFullExcerpt = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  max-width: 500px;
  margin: 0 auto;
`;

export const NewsFullImage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 0;

    img {
      max-height: 400px;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const NewsFullDate = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: start;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const NewsFullMain = styled.article`
  font-size: 18px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;

  :first-child {
    margin-top: 0;
  }

  > *:not(:first-child) {
    margin-block-start: 1.5rem;
  }

  figure {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    .wp-block-image {
      position: relative;
      figcaption {
        position: absolute;
        bottom: 0;
        text-align: center;
        font-size: 12px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .is-type-video {
    display: inline;

    div {
      display: flex;
      justify-content: center;
    }
  }

  .wp-block-embed__wrapper {
    max-width: 700px;
    margin: auto;

    div,
    span {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
