import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta
            name="description"
            content="
            Heracles - The one stop for builders, home owners and renters. 
            We provide our best in class search platform for new home owners and renters who are still searching for their dream home.
            We also provide extremely tailored services for inventory and personnel management for societies 
            along with beautiful and simple users platform to manage complaints, pay bills, access control and many more.
            Sign up :)
            "
          />
          <meta
            name="keywords"
            content="society, apartment, rent, lease, home, furnished, semi furnished, house, security"
          />
          <link rel="manifest" href="/manifest.json" />
          <link href="/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
          <link rel="apple-touch-icon" href="/icons/icon-384x384.png"></link>
          <meta name="theme-color" content="#05a8aa" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="true"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
