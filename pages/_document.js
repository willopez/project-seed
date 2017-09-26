import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import StylesSCSS from '../styles/app.scss';
import StylesheetTag from '../components/StylesheetTag';

export default class HTMLDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <StylesheetTag style={StylesSCSS} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
