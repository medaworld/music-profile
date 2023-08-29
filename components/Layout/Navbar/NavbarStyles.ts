'use client';

import styled from 'styled-components';

export const Header = styled.header`
  background-image: linear-gradient(
    ${(props) => props.theme.background},
    transparent
  );
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  height: 55px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  z-index: 5;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.background};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: max-height 0.3s ease;

  @media (max-width: 768px) {
    justify-content: space-between;
    overflow: hidden;
  }
`;

export const Logo = styled.a`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  display: flex;

  div {
    width: min(max(30px, 2vw), 45px);

    .mask {
      width: min(max(30px, 2vw), 45px);
    }
  }

  @media (max-width: 768px) {
    div {
      width: 30px;

      .mask {
        width: 30px;
      }
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  margin: 0 2vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  margin-right: 2.2vw;
  font-size: min(max(16px, 1.02vw), 28px);

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const SocialWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
