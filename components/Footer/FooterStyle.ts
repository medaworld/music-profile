import { styled } from 'styled-components';

export const FooterContainer = styled.footer<{ playerOpen: boolean }>`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/images/footer-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding-bottom: ${({ playerOpen }) => (playerOpen ? '7rem' : '1.5rem')};
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: max(10px, 0.75vw);
  margin: 0;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.light};
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.grey};
  }
`;

export const FooterList = styled.ul`
  display: flex;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
`;

export const FooterItem = styled.li`
  margin-right: 2.2vw;
  font-size: max(14px, 1.02vw);

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
    font-size: 14px;
  }
`;
