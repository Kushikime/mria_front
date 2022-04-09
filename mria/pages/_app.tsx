import type { AppProps } from 'next/app'
import { setupStore } from '../store/store'
import { Provider } from 'react-redux';
import '../scss/app.global.scss';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  //IF AUTHED REDIRECT TO THE ADMIN PANEL?
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
