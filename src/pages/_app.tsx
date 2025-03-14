import '../styles/globals.css'; // Make sure this path is correct
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
} 