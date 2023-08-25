'use client';

import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav<{ isOpen: boolean }>`
  background-image: linear-gradient(
    ${(props) => props.theme.tpdark},
    transparent
  );
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  z-index: 5;
  max-height: ${({ isOpen }) => (isOpen ? '250px' : '70px')};
  transition: max-height 0.3s ease;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: start;
    background-color: rgba(51, 51, 51, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: ${({ isOpen }) => (isOpen ? '215px' : 'none')};
    overflow: hidden;
  }
`;
export const Logo = styled.a`
  color: ${(props) => props.theme.light};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const LogoImage = styled.img`
  width: 2.5vw;
  min-width: 24px;
  max-width: 50px;

  @media (max-width: 1024px) {
    width: 24px;
  }
`;
export const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  margin: 0 2vw;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    padding: 5px;
    margin: 0;

    li {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;
export const NavLink = styled.li`
  margin-right: 2.2vw;
  font-size: min(max(16px, 1.02vw), 28px);

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${(props) => props.theme.light};
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

export const SocialWrapper = styled.div<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 160px;
    left: 0;
    width: 100%;
    margin: 0;
    transition: all 0.3s ease;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerBar = styled.span<{ isOpen: boolean }>`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: ${(props) => props.theme.light};
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && 'transform: translateY(8px) rotate(-45deg);'}

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:last-child {
    ${({ isOpen }) =>
      isOpen && css && 'transform: translateY(-8px) rotate(45deg);'}
  }
`;
