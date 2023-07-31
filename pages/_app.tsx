import Head from 'next/head';

import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import Layout from '../components/Layout/Layout';
import { MediaPlayerProvider } from '../components/contexts/MediaPlayerProvider';
import GlobalStyle from '../components/styles/GlobalStyle';
import { theme } from '../themes/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MediaPlayerProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MediaPlayerProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
}

export default MyApp;
