import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta name='author' content='Igor Peterossi Lopes'></meta>
        <meta
          name='description'
          content='Analisador de resultados da loteria da Mega Sena'
        ></meta>
        <meta
          name='keywords'
          content='Mega, Sena, Loteria, Análise, Analisador'
        ></meta>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
