import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { appSlice } from '../store/reducers/AppSlice'

import styles from  '../scss/landing/Landing.module.scss';
import Header from '../components/Header'
import Link from 'next/link'

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


        <div className={styles.videoWrap}>
          <video muted autoPlay loop>
            <source src="/assets/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoContent}>
            <p>Доброго дня! <br /> Ми з України</p>
          </div>
        </div>


        <div className={styles.who_we_are}>
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h1>ХТО МИ</h1>
              <p>Загальна звітність про отримані кошти та витрати</p>
            </div>

            <div className={styles.content}>
              <div className={styles.left}>
                <p>Волонтерська група «До Мрії» — це добровільне об’єднання небайдужих українців, які мають на меті різнобічно допомагати героям ЗСУ та ТрО, всіляко сприяти перемозі України та у перспективі шукати шляхи її повної відбудови.</p>
                <br />
                <p>Фонд  поповнюється за рахунок добровільних внесків та гуманітарної допомоги від громадян із різних куточків світу. Ми гарантуємо прозорість та ефективність використання залучених коштів.
  Щиро вдячні кожному за небайдужість та довіру до нашої діяльності!</p>
                <br />
                <p>У довгостроковій перспективі наша команда ставить перед собою завдання максимально сприяти відбудові інфраструктури України. Допоможемо разом, наша сила в єдності!</p>
              </div>
              <div className={styles.right}>
                <img src="/assets/images/who_we_are.png" alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.what_we_do}>
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h1>Що ми робимо</h1>
              <p>Загальна звітність про отримані кошти та витрати</p>
            </div>

            <div className={styles.content}>
              <div className={styles.card}>
                <h2>Наша мета</h2>
                <p>Робити все можливе для перемоги захисників України над Російськими окупантами. Приймати безпосередню участь в розбудові України.</p>
              </div>
              <div className={styles.card}>
                <h2>Кому допомагаємо</h2>
                <p>Волонтерська група «До Мрїі» працює виключно з керуючим складом ЗСУ та ТрО, а також з керівниками військових адміністрацій. Перевізники доставляють сформовані нами посилки одразу на передову згідно адресних запитів</p>
              </div>
              <div className={styles.card}>
                <h2>Основні напрямки </h2>
                <p>Постачання військової амуніції, бронежилетів, касок, приладів спостереження та зв’язку військового призначення згідно запитів від підрозділів ЗСУ та ТрО</p>  
                <p>Допомога у забезпеченні підрозділам ЗСУ та ТрО речами першої необхідності та продуктами харчування</p>
                <p>Допомога у забезпеченні засобами першої медичної допомоги військових госпіталів та медичних закладів, які надають допомогу пораненим бійцям ЗСУ та ТрО, військовослужбовцям та мирним громадянам.</p>
              </div>
              <div className={styles.card}>
                <h2>Реалізовані проекти</h2>
                <p>Тільки за <span>15</span> днів діяльності ВГ «До Мрії» вдалося зібрати  більше ніж 1 млн.грн. 
                  З них закуплено медичних засобів більше ніж на <span>176 000</span> грн, військового спорядження більше ніж на 860 000 грн, речей першої необхідності для військових підрозділів більше ніж на <span>110 000</span> грн.
                  На разі групою зібрано понад <span>2</span> млн. грн., які направлено на потреби наших захисників.
                  <br />
                  Вся актуальна інформація по звітах – у нашому <a href="#">телеграм-каналі</a>
                </p>
              </div>
            </div>
          </div>
        </div>


      {/* While loading show animated preloader maybe the logo on white background will do a heartbeat animation */}
      {/* After page is loaded opcaity 0 and stop animation or maybe stop animation and move the preloader out of the webpage frame. */}

      {/* if / or /requisites show landing part with 1 header */}

      {/* else if /workspace show admin part */}

      {/* else show 404 page or do a redirect for the landing page */}


      <div className={styles.social}>
        <Link prefetch={true} href={'https://www.instagram.com/naruto/'}>
          <div className={styles.telegram}>
            <img src="/assets/images/telegram.png" alt="" />
            <span className={styles.before}></span>
            <span className={styles.after}></span>
          </div>
        </Link>
        
        <Link prefetch={true} href={'https://www.instagram.com/naruto/'}>
          <div className={styles.instagram}>
            <img src="/assets/images/instagram.png" alt="" />
            <span className={styles.before}></span>
            <span className={styles.after}></span>
          </div>
        </Link>

        <Link prefetch={true} href={'https://www.instagram.com/naruto/'}>
          <div className={styles.facebook}>
            <img src="/assets/images/facebook.png" alt="" />
            <span className={styles.before}></span>
            <span className={styles.after}></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Landing
