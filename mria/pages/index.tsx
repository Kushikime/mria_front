import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { appSlice } from '../store/reducers/AppSlice'
import styles from  '../scss/landing/Landing.module.scss';
import Header from '../components/Header'

const Landing: NextPage = () => {
  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.AppReducer);
  const {toggleAppLoading} = appSlice.actions;

  const router = useRouter();
  const path = router?.asPath;

  return (
    <div className={styles.landing}>
      <Head>
        <title>До Мрії - організація волонтерів. ПОМІНЯТИ</title>
        <meta name="description" content="Mria description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>Landing page</h1>
      {/* While loading show animated preloader maybe the logo on white background will do a heartbeat animation */}
      {/* After page is loaded opcaity 0 and stop animation or maybe stop animation and move the preloader out of the webpage frame. */}

      {/* if / or /requisites show landing part with 1 header */}

      {/* else if /workspace show admin part */}

      {/* else show 404 page or do a redirect for the landing page */}
    </div>
  )
}

export default Landing
