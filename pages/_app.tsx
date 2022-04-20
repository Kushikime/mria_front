// @ts-nocheck
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import '../scss/app.global.scss';
import { useRouter } from 'next/router';
import { SidePanel } from '../components/SidePanel';
import Login from './login';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setAuthenticated(localStorage.getItem('@accessToken'));
  }, []);

  if (router.pathname.includes('panel')) {
    if (authenticated) {
      return (
        <>
          <SidePanel />
          <Component {...pageProps} />
        </>
      );
    } else {
      return <Login />;
    }
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
