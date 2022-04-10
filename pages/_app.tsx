import type { AppProps } from 'next/app'
import { setupStore } from '../store/store'
import { Provider } from 'react-redux';
import '../scss/app.global.scss';
import { useRouter } from 'next/router';
import { SidePanel } from '../components/SidePanel';


import {io, Socket} from 'socket.io-client';
import { useEffect, useState } from 'react';
import Toast from '../components/Toast';





const store = setupStore();



function MyApp({ Component, pageProps }: AppProps) {




  //IF AUTHED REDIRECT TO THE ADMIN PANEL?

  const router = useRouter();

  if (router.pathname.includes('panel')) {
    if (true) { // TODO: Add validation for authentication
      // if (router.pathname.endsWith('panel')) {
      //   router.
      // }
      return (
        <>
          <SidePanel />
          <Component {...pageProps} />
        </>
      )
    }
  }



  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
