import { useStore } from '../store';

export default function Index() {
  return <>home</>;
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getServerSideProps() {
  return {
    props: {
      // passing initialZustandState to _app.tsx pageProps (hydration)
      initialZustandState: {
        // lastUpdate: Date.now(),
        // light: false,
      },
    },
  };
}
