import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-image: linear-gradient(rgba(51, 51, 51, 0.5), transparent);
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    background-color: rgba(51, 51, 51, 0.8);
    backdrop-filter: blur(10px);
  }
`;

export const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const LogoImage = styled.img`
  width: 2.5vw;
  min-width: 24px;

  @media (max-width: 1024px) {
    width: 24px;
  }
`;

export const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  margin: 0 2vw;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background-color: inherit;
    padding: 1rem;
    margin: 0;

    li {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  }
`;

export const NavLink = styled.li`
  margin-right: 2.2vw;
  font-size: max(16px, 1.02vw);

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
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
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  ${(props) => props.isOpen && 'transform: translateY(8px) rotate(-45deg);'}

  &:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }

  &:last-child {
    ${(props) => props.isOpen && 'transform: translateY(-8px) rotate(45deg);'}
  }
`;
