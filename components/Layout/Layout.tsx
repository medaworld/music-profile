'use client';

import { styled } from 'styled-components';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url('/images/background.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;
const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
