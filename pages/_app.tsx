import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useCreateStore, Provider } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <Provider createStore={createStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
