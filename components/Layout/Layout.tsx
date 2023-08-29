'use client';

import { styled } from 'styled-components';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import shouldForwardProp from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import MediaPlayer from '../MediaPlayer/MediaPlayer';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url('/images/background.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Navbar />
        <div id="content">
          <MediaPlayer />
          <Background />
          {children}
          <Footer />
        </div>
      </StyleSheetManager>
    </>
  );
}
