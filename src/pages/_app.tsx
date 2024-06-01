import { AppProps } from 'next/app';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/components/ErrorFallback';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Junior Alves</title>
        <link href="/img/bg.png" rel="shorcut icon" />
        <link href="/img/bg.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="Junior Alves" name="description" />
      </Head>

      <main className="min-h-screen">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
