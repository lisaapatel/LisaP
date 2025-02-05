import "../styles/global.css";
import { ThemeProvider } from 'next-themes';

import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>Lisa Patel</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
