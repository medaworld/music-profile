import Head from 'next/head';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import Layout from '../components/Layout/Layout';
import { MediaPlayerProvider } from '../components/contexts/MediaPlayerProvider';
import GlobalStyle from '../components/styles/GlobalStyle';

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
        <GlobalStyle />
        <MediaPlayerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MediaPlayerProvider>
      </StyleSheetManager>
    </>
  );
}

export default MyApp;
