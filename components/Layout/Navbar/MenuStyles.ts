import { styled } from 'styled-components';

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    border: 0;
    background-color: transparent;
    color: inherit;
  }
`;

export const HamburgerBox = styled.div`
  display: inline-block;
  position: relative;
  height: 24px;
  width: 30px;
`;

export const HamburgerBar = styled.span<{ menuOpen: boolean }>`
  display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.3s ease-in-out;
  ${({ menuOpen }) => menuOpen && 'transform: translateY(10px) rotate(-45deg);'}

  &:nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    transform: ${({ menuOpen }) => (menuOpen ? `translateX(-20px)` : `none`)};
  }

  &:last-child {
    ${({ menuOpen }) =>
      menuOpen && 'transform: translateY(-10px) rotate(45deg);'}
  }
`;

export const SlideMenu = styled.aside<{ menuOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: ${(props) => props.theme.sidebarbg};
    box-shadow: -10px 0px 30px -15px ${(props) => props.theme.shadow};
    z-index: 9;

    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    width: 100%;
    flex-direction: column;
    color: ${(props) => props.theme.primary};
    font-family: var(--font-mono);
    text-align: center;
    display: flex;
    align-items: center;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 600;
  text-transform: uppercase;

  li {
    font-size: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 200px;

  ul {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    li {
      margin: 0;
      flex: 0 0 calc(25% - 15px);
    }
  }
`;
