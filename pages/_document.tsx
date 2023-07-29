import Document, { Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Html>
            <body>
              <Main />
              <div id="overlays" />
              <NextScript />
              {initialProps.styles}
              {sheet.getStyleElement()}
            </body>
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
