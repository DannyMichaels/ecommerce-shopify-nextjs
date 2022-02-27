import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useCreateStore, Provider as ZustandStoreProvider } from '../store';
import { ReactNode, useEffect } from 'react';
import { useStore } from '../store';
import Router from 'next/router';
import { ChakraProvider } from '@chakra-ui/provider';
import ProgressBar from '@badrap/bar-of-progress';
import Layout from '../components/Layout';
import Head from 'next/head';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <>
      <Head>
        <title>Bath Bombs</title>
        <meta
          name="description"
          content="Introducing Bath Bombs, The relaxation you've been waiting for."
        />
      </Head>
      <ChakraProvider>
        <ZustandStoreProvider createStore={createStore}>
          <FetchCheckout />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ZustandStoreProvider>
      </ChakraProvider>
    </>
  );
}

// fetch stuff on mount
function FetchCheckout() {
  const { fetchCheckout, createCheckout } = useStore();

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
