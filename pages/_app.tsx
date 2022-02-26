import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useCreateStore, Provider } from '../store';
import { ReactNode, useEffect } from 'react';
import { useStore } from '../store';

export default function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <Provider createStore={createStore}>
      <StoreHandler>
        <Component {...pageProps} />
      </StoreHandler>
    </Provider>
  );
}

// fetch stuff on mount
function StoreHandler({ children }: { children: ReactNode }) {
  const { fetchCheckout, createCheckout } = useStore();

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
