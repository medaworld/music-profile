import { styled } from 'styled-components';

export const PlatformsListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  color: ${(props) => props.theme.primary};
`;

export const Platforms = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Platform = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;
  transition: all 0.1s ease;
  box-shadow: var(--neumorph);

  &:hover {
    box-shadow: none;

    span {
      background-color: transparent;
    }

    &:active {
      box-shadow: var(--press);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const PlatformIcon = styled.span`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.background};
`;

export const PlatformText = styled.span`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
`;
