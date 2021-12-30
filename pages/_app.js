import Head from 'next/head';
import '../styles/globals.css';
// import '../styles/st.js';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grocery website design tutorial</title>
        <link rel="icon" type="image/png" href="images/home-img.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
