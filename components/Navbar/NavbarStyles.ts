import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: tramsparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
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
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
`;

export const NavLink = styled.li`
  margin-right: 2.2vw;
  font-size: 1vw;

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
`;

export const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const SocialLink = styled.li`
  margin-left: 1.5vw;
  color: #fff;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;
