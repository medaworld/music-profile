import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
