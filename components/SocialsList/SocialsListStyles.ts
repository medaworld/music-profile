'use client';

import { styled } from 'styled-components';

export const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
export const SocialLink = styled.li`
  margin-left: max(15px, 1.5vw);
  color: ${(props) => props.theme.light};
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  a {
    color: ${(props) => props.theme.light};
    text-decoration: none;
    cursor: pointer;
    display: block;

    &:hover {
      opacity: 0.7;
    }
  }
`;
