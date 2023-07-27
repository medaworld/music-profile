import styled from 'styled-components';

const NewsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const NewsSection = () => {
  return (
    <NewsContainer id="news">
      <h1>News Section</h1>
    </NewsContainer>
  );
};

export default NewsSection;
