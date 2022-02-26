import useInterval from '../hooks/useInterval';
import Clock from '../components/clock';
import Counter from '../components/counter';

import { initializeStore, useStore } from '../store';

export default function Page() {
  const { tick } = useStore();

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true);
  }, 1000);

  return (
    <>
      <Clock />
      <Counter />
    </>
  );
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  return {
    props: {
      // passing initialZustandState to _app.tsx pageProps (hydration)
      initialZustandState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  };
}
