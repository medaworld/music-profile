import { styled } from 'styled-components';

export const PlatformsListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Platforms = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Platform = styled.li<{ color: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.tpdark};
  margin-bottom: 1rem;
  border-radius: 10px;
  transition: all 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme.tplight};

    span:first-child {
      color: ${({ color }) => color};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const PFIcon = styled.span`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => props.theme.tplight};
  color: ${(props) => props.theme.dark};
`;

export const PFText = styled.span`
  padding-left: 10px;
  font-size: 18px;
`;
