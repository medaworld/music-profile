import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { Montserrat, Roboto_Slab } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '700'] });

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
      <main className={[montserrat.className, robotoSlab.className]}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
