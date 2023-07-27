import Head from 'next/head';
import GlobalStyle from '../components/styles/GlobalStyle';
import { Montserrat, Roboto_Slab } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '700'] });

function concatStyles(styles) {
  return styles.map((style) => style.styles).join('');
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MEDA | Official Website</title>
        <meta name="description" content="Official website for MEDA" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <GlobalStyle />
      <style jsx>{`
        main {
          ${concatStyles([montserrat, robotoSlab])}
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
