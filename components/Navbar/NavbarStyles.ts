import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: tramsparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
`;

export const Logo = styled.a`
  color: #fff;
  text-decoration: none;

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

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  margin: 0 2vw;
`;

export const NavLink = styled.li`
  margin-right: 2.2vw;
  font-size: max(14px, 1.02vw);

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
