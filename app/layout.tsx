import { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import { MediaStateContextProvider } from '../context/mediaState/MediaStateProvider';
import { ThemeStateContextProvider } from '../context/themeState/ThemeStateProvider';
import Layout from '../components/Layout/Layout';
import GlobalStyle from '../styles/GlobalStyles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { montserrat } from '../styles/Fonts';

export const metadata: Metadata = {
  title: 'Artist | Official Website',
  description:
    'Explore the creative world of Artist. Dive into their latest work, collections, and journey. ',
  icons: {
    icon: '/favicon.ico',
  },
};

function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeStateContextProvider>
          <GlobalStyle />
          <MediaStateContextProvider>
            <body className={montserrat.className}>
              <Layout>{children}</Layout>
            </body>
          </MediaStateContextProvider>
        </ThemeStateContextProvider>
      </StyledComponentsRegistry>
    </html>
  );
}

export default MyApp;
