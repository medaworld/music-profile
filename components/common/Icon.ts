import styled from 'styled-components';

export const Icon = styled.i`
  font-family: 'icomoon';
  font-size: min(max(20px, 1.35vw), 32px);
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;
