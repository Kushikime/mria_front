// @ts-nocheck
import type { AppProps } from 'next/app';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import '../scss/app.global.scss';
import { useRouter } from 'next/router';
import { SidePanel } from '../components/SidePanel';
import Login from './login';


import {io, Socket} from 'socket.io-client';
import { useEffect, useState } from 'react';
import Toast from '../components/Toast';





const store = setupStore();



function MyApp({ Component, pageProps }: AppProps) {
  
  const router = useRouter();

  if (router.pathname.includes('panel')) {
    if (true) {
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
