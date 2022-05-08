import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";

import styles from  '../scss/donate/Donate.module.scss';

interface IDetailsProps {

}

const content = {
    "en": {
        title: 'Help Ukraine to win the war',
        secondary: 'We collect the money and buy everything we need for our front-line guards.',
        menu: {
            whoWeAre: 'About us',
            whatWeDo: 'What we do',
            team: 'Team',
            partners: 'Partners',
            contacts: 'Contact'
        },
        helpBtn: 'Support'
    },
    "uk": {
        title: 'Допоможіть Україні перемогти',
        secondary: 'Ми збираємо кошти та купуємо все необхідне для наших захисників на передовій.',
      menu: {
          whoWeAre: 'ХТО МИ',
          whatWeDo: 'що робимо',
          team: 'КОМАНДА',
          partners: 'пАРТНЕРИ',
          contacts: 'Контакти'
      },
      helpBtn: 'Допомогти'
    },
  };

const Donate: NextPage = () => {

    const { locale, locales, defaultLocale } = useRouter();
    //@ts-ignore
    const { menu, helpBtn, title, secondary } = content[locale];
    
    const copyToClipBoard = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className={styles.donate}>
            <Head>
                <title>Допомогти Україні</title>
                <meta name="description" content="Mria description..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <div className={styles.wrap}>
                <h1>{title}</h1>
                <p className={styles.secondary}>{secondary}</p>
                <div className={styles.top}>
                    <div className={styles.privat}>
                        <p className={styles.title}>Реквізити ПриватБанк:</p>
                        <div className={styles.line} onClick={() => {copyToClipBoard('5221191100900926')}}>
                            <div className={styles.left}>
                                <img src="/assets/images/privat.svg" alt="" />
                                <p className={styles.value}>5221191100900926</p>
                            </div>
                            <div className={styles.copy}>
                                <img src="/assets/images/copy.svg" alt="" />
                            </div>
                        </div>
                        <p className={styles.owner}>Пинзар Роман Ігорович</p>
                    </div>

                    <div className={styles.paypal}>
                        <p className={styles.title}>PayPal</p>
                        <div className={styles.line} onClick={() => {copyToClipBoard('domrii.ua@gmail.com')}}>
                            <div className={styles.left}>
                                <img src="/assets/images/paypal.png" alt="" />
                                <p className={styles.value}>domrii.ua@gmail.com</p>
                            </div>
                            <div className={styles.copy}>
                                <img src="/assets/images/copy.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.rahunok} ${styles.shadow}`}>
                    <p className={styles.title}>Bank details (USD)</p>
                    <div className={styles.line} onClick={() => {copyToClipBoard('UA643052990000026203900720376')}}>
                        <div className={styles.left}> 
                            <p className={styles.value}>UA643052990000026203900720376</p>
                        </div>
                        <div className={styles.copy}>
                            <img src="/assets/images/copy.svg" alt="" />
                        </div>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                </div>
                <div className={`${styles.rahunok} ${styles.shadow}`}>
                    <p className={styles.title}>Bank details (EUR)</p>
                    <div className={styles.line} onClick={() => {copyToClipBoard('UA643052990000026203900720376')}}>
                        <div className={styles.left}>
                            <p className={styles.value}>UA643052990000026203900720376</p>
                        </div>
                        <div className={styles.copy}>
                            <img src="/assets/images/copy.svg" alt="" />
                        </div>
                    </div>

                    
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.title}>Beneficiary: <span className={styles.value}>Pynzar Roman, 03058, Ukraine, city Kyiv, street Nizhynska, building 14</span></p>
                    </div>

                </div>

                <div className={`${styles.crypto} ${styles.shadow}`}>
                    <p className={styles.title}>Криптогаманець: USDT</p>
                    <div className={styles.line} onClick={() => {copyToClipBoard('TKuqLpPQ8wvpKeQ3mdXe9fXvZvQTqqqoVb')}}>
                        <div className={styles.left}>
                            <p className={styles.value}>TKuqLpPQ8wvpKeQ3mdXe9fXvZvQTqqqoVb</p>
                        </div>
                        <div className={styles.copy}>
                            <img src="/assets/images/copy.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <footer className={styles.footer} id="contacts">
          <div className={styles.wrap}>
              <div className={styles.logo}>
              <img src="/assets/images/logo1.svg" alt="До мрії лого" className="logo" />
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                    <a href="/#who_we_are">{menu.whoWeAre}</a>
                </li>
                <li><a href="/#what_we_do">{menu.whatWeDo}</a></li>
                <li><a href="/#inventors">{menu.team}</a></li>
                {/* <li><a href="#">ЗВІТНІСТЬ</a></li> */}
                <li><a href="/#partners">{menu.partners}</a></li>
                <li><a href="/#contacts">{menu.contacts}</a></li>
              </ul>
            </div>
            <div className={styles.btn}>
              <span>{helpBtn}</span>
            </div>

            <div className={styles.socialFooter}>
              <Link href={'https://www.instagram.com/domrii.ua/'}>
                <div className={styles.instagram}>
                  <img src="/assets/images/footerInsta.svg" alt="" />
                  <span className={styles.before}></span>
                  <span className={styles.after}></span>
                </div>
              </Link>

              <Link href={'https://www.facebook.com/vg.do.mrii.ua/'}>
                <div className={styles.facebook}>
                  <img src="/assets/images/footerFace.svg" alt="" />
                  <span className={styles.before}></span>
                  <span className={styles.after}></span>
                </div>
              </Link>

              <Link href={'https://t.me/do_mrii'}>
                <div className={styles.telegram}>
                  <img src="/assets/images/footerTelegram.svg" alt="" />
                  <span className={styles.before}></span>
                  <span className={styles.after}></span>
                </div>
              </Link>

              <Link href={'https://twitter.com/do_mrii'}>
                <div className={styles.twitter}>
                  <img src="/assets/images/footerTwitter.svg" alt="" />
                  <span className={styles.before}></span>
                  <span className={styles.after}></span>
                </div>
              </Link>
            </div>

            <div className={styles.copyrights}>
              <div className={styles.left}>
                <Link href={'https://www.instagram.com/naruto/'}>
                  <p>Privacy Notice</p>
                </Link>
              </div>
              <div className={styles.right}>
                <p>Privacy Notice© 2022 domriji. All rights reserved</p>
              </div>
            </div>
          </div>
      </footer>
        </div>
    )
}




export default Donate;