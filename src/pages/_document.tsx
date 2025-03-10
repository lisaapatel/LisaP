import { getBasePath } from '@/lib/utils';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href={getBasePath('/favicon.ico')} />
        {/* other head elements */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 