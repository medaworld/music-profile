import Layout from '@/components/Layout/Layout';
import { MediaStateContextProvider } from '@/context/mediaState/MediaStateProvider';
import { ThemeStateContextProvider } from '@/context/themeState/ThemeStateProvider';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/GlobalStyles';
import type { Metadata } from 'next';
import { montserrat } from '@/styles/Fonts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LoadedPostsStateContextProvider } from '@/context/loadedPostsState/LoadedPostsStateProvider';
import { getPosts } from '@/utils/fetchUtils';

export const metadata: Metadata = {
  title: 'MEDA | Official Website',
  description:
    'Explore the creative world of Artist. Dive into their latest work, collections, and journey. ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts(5);

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeStateContextProvider>
          <GlobalStyle />
          <MediaStateContextProvider>
            <LoadedPostsStateContextProvider postsData={posts}>
              <body className={montserrat.className}>
                <Layout>{children}</Layout>
              </body>
            </LoadedPostsStateContextProvider>
          </MediaStateContextProvider>
        </ThemeStateContextProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
