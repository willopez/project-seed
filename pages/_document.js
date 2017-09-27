import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import StylesSCSS from '../styles/app.scss';
import StylesheetTag from '../components/StylesheetTag';

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return <Helmet title="Home" />;
  }

  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.helmetJsx}
          {this.helmetHeadComponents}
          <StylesheetTag style={StylesSCSS} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
