import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { appSlice } from '../store/reducers/AppSlice'

import styles from  '../scss/landing/Landing.module.scss';
import Header from '../components/Header'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import Toast from '../components/Toast'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'
import { current } from '@reduxjs/toolkit'

interface IncomeToast {
  id: string
  amount: number
  amountUah: number
  currency: string
  date: string
  owner: string
  closed: boolean
}

const content = {
  "en": {
      menu: {
          whoWeAre: 'About us',
          whatWeDo: 'What we do',
          team: 'Team',
          partners: 'Partners',
          contacts: 'Contact'
      },
      h1: 'Welcome!   We are from Ukraine!',
      whoWeAre: {
        title: 'About us',
        subTitle: 'What our volunteer network does and how we help Ukraine',
        text: {
          first: `Volunteer group "Do Mriyi" is a voluntary association of caring Ukrainians who aim to help the heroes of the Armed Forces of Ukraine and Territorial Defense, promote Ukraine's victory and in the long run look for ways to rebuild it.`,
          second: `The fund of the Volunteer Group "Do Mriyi" is replenished through voluntary contributions and humanitarian aid from citizens from around the world.  We guarantee transparency and efficiency in the use of borrowed funds.
          We are sincerely grateful to everyone for their indifference and trust in our activities!`,
          third: `In the long run, our team aims to maximize the reconstruction of Ukraine's infrastructure. Let's help together, our strength is in unity!`
        }
      },
      whatWeDo: {
        title: 'What we do',
        subTitle: 'Our purpose is to unite and help our defenders, taking into account their needs and wishes.',
        cards: {
          card1: {
            title: `Our goal`,
            text: `Our purpose is to unite and help our defenders, taking into account their needs and wishes.`
          },
          card2: {
            title: `Who do we help?`,
            text: `"Do Mriyi" works with the commanding staff of the Armed Forces of Ukraine and the Territorial Defense, as well as with the heads of military administrations.
            Our carriers deliver parcels to the advanced according to address inquiries.`
          },
          card3: {
            title: `The main activities of VO "Do Mriyi" in wartime`,
            text: {
              first: `Supply of military ammunition, bulletproof vests, helmets, surveillance and communication devices for military purposes as requested by units of the Armed Forces of Ukraine and the Territorial Defense;`,
              second: `Assistance in providing basic necessities and food to the units of the Armed Forces of Ukraine and the Territorial Defense;`,
              third: `Assistance in providing first aid to military hospitals and medical facilities that provide assistance to wounded soldiers and civilians.`
            }
          },
          card4: {
            title: `Implemented projects`,
            text: {
              first: `In just 15 days of VG "Do Mriyi", it was possible to raise more than 1 million UAH.
              Purchased by:
              • military equipment worth over  860,000 UAH 
              • medical devices in the amount of over 176,000 UAH 
              • essentials for military units over 110,000 UAH.`,
              second: `We have also collected about 2 million UAH, which we are sending to the needs of our military.
              You can view current information on our financial statements in the Telegram channel:`
            }
          }
        }
      },
      team: {
        title: 'Founders',
        subTitle: '"Do Mriyi" has about 100 volunteers who perform their duties in several countries (Ukraine, Romania, Germany, Belgium, Ireland, etc.).',
        cards: [
          {
            name: 'ANDREY KOSTYRA',
            img: '/assets/images/team/ak.png',
            href: 'https://www.facebook.com/andrey.kostyra/'
          },
          {
            name: 'Pinzar Anton',
            img: '/assets/images/team/pa.png',
            href: 'https://www.facebook.com/profile.php?id=100008596541850'
          },
          {
            name: 'Hnatchuk Julia',
            img: '/assets/images/team/gu.png',
            href: 'https://www.facebook.com/profile.php?id=100007545587211'
          },
          {
            name: 'Hutsul Vladimir',
            img: '/assets/images/team/gv.png',
            href: ''
          },
          {
            name: 'Pinzar Igor',
            img: '/assets/images/team/pi.png',
            href: 'https://www.facebook.com/profile.php?id=100005458994736'
          },
          {
            name: 'Plotnikov Kirill',
            img: '/assets/images/team/pk.png',
            href: 'https://www.facebook.com/profile.php?id=100004110130227'
          },
          {
            name: 'Plotnikova Marina',
            img: '/assets/images/team/pm.png',
            href: 'https://www.facebook.com/maryna.mykhailuk'
          },
          {
            name: 'Vitaliy Kordunyan',
            img: '/assets/images/plotnikova.png',
            href: ''
          }
        ]
      },
      zvit: {
        title: 'Reports',
        subTitle: 'General reports on funds and expenses received',
        switcher: {
          last: 'Last',
          incomes: 'incomes',
          outcomes: 'expenses'
        }
      },
      partners: {
        title: 'Partners',
        subTitle: 'Partners who help us'
      },
      helpBtn: 'Support'
  },
  "uk": {
    menu: {
        whoWeAre: 'ХТО МИ',
        whatWeDo: 'що робимо',
        team: 'КОМАНДА',
        partners: 'пАРТНЕРИ',
        contacts: 'Контакти'
    },
    h1: 'Доброго дня!   Ми з України',
    whoWeAre: {
      title: 'ХТО МИ',
      subTitle: 'Чим займається наша волонтерська організація і як ми допомагаємо Україні ',
      text: {
        first: 'Волонтерська група «До Мрії» — це добровільне об’єднання небайдужих українців, які мають на меті різнобічно допомагати героям ЗСУ та ТрО, всіляко сприяти перемозі України та у перспективі шукати шляхи її повної відбудови.',
        second: `Фонд  поповнюється за рахунок добровільних внесків та гуманітарної допомоги від громадян із різних куточків світу. Ми гарантуємо прозорість та ефективність використання залучених коштів.
        Щиро вдячні кожному за небайдужість та довіру до нашої діяльності!`,
        third: 'У довгостроковій перспективі наша команда ставить перед собою завдання максимально сприяти відбудові інфраструктури України. Допоможемо разом, наша сила в єдності!'
      }
    },
    whatWeDo: {
      title: 'Що ми робимо',
      subTitle: 'Чим займається наша волонтерська огранізація',
      cards: {
        card1: {
          title: `Наша мета`,
          text: `Робити все можливе для перемоги захисників України над Російськими окупантами. Приймати безпосередню участь в розбудові України.          `
        },
        card2: {
          title: `Кому допомагаємо`,
          text: `Волонтерська група «До Мрїі» працює виключно з керуючим складом ЗСУ та ТрО, а також з керівниками військових адміністрацій. Перевізники доставляють сформовані нами посилки одразу на передову згідно адресних запитів`
        },
        card3: {
          title: `Основні напрямки`,
          text: {
            first: `Постачання військової амуніції, бронежилетів, касок, приладів спостереження та зв’язку військового призначення згідно запитів від підрозділів ЗСУ та ТрО`,
            second: `Допомога у забезпеченні підрозділам ЗСУ та ТрО речами першої необхідності та продуктами харчування`,
            third: `Допомога у забезпеченні засобами першої медичної допомоги військових госпіталів та медичних закладів, які надають допомогу пораненим бійцям ЗСУ та ТрО, військовослужбовцям та мирним громадянам.`
          }
        },
        card4: {
          title: `Реалізовані проекти`,
          text: {
            first: `Всього за 15 днів ВГ «До Мрій» вдалося зібрати понад 1 млн грн.
            Придбано:
            • військової техніки на суму понад 860 тис. грн
            • виробів медичного призначення на суму понад 176 тис. грн
            • предмети першої необхідності для військових частин понад 110 тис. грн.`,
            second: `Також ми зібрали близько 2 млн. грн., які надсилаємо на потреби наших військових.
            Ви можете переглянути поточну інформацію про нашу фінансову звітність у Telegram-каналі:`
          }
        }
      }
    },
    team: {
      title: 'Засновники проекту',
      subTitle: 'Всього ВГ “ДО МРІЇ” налічує близько 100 волонтерів, які виконують різні функції на території різних країн (Україна Румунія, Німеччина, Бельгія, Ірландія  та ін.)',
      cards: [
        {
          name: 'Костира Андрій',
          img: '/assets/images/team/ak.png',
          href: 'https://www.facebook.com/andrey.kostyra/'
        },
        {
          name: 'Пинзар Антон',
          img: '/assets/images/team/pa.png',
          href: 'https://www.facebook.com/profile.php?id=100008596541850'
        },
        {
          name: 'Гнатчук Юлія',
          img: '/assets/images/team/gu.png',
          href: 'https://www.facebook.com/profile.php?id=100007545587211'
        },
        {
          name: 'Гуцул Володимир',
          img: '/assets/images/team/gv.png',
          href: ''
        },
        {
          name: 'Пинзар Ігор',
          img: '/assets/images/team/pi.png',
          href: 'https://www.facebook.com/profile.php?id=100005458994736'
        },
        {
          name: 'Плотніков Кирило',
          img: '/assets/images/team/pk.png',
          href: 'https://www.facebook.com/profile.php?id=100004110130227'
        },
        {
          name: 'Плотнікова Марина',
          img: '/assets/images/team/pm.png',
          href: 'https://www.facebook.com/maryna.mykhailuk'
        },
        {
          name: 'Кордунян Віталій',
          img: '/assets/images/plotnikova.png',
          href: ''
        }
      ]
    },
    zvit: {
      title: 'Звітність',
      subTitle: 'Загальна звітність про отримані кошти та витрати',
      switcher: {
        last: 'Останні',
        incomes: 'внески',
        outcomes: 'витрати'
      }
    },
    partners: {
      title: 'Партнери',
      subTitle: 'Партнери які допомагають нам'
    },
    helpBtn: 'Допомогти'
  },
};



const Landing: NextPage = () => {
  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.AppReducer);
  const {toggleAppLoading} = appSlice.actions;

  const { locale, locales, defaultLocale, } = useRouter();

  //@ts-ignore
  const { menu, h1, helpBtn, partners, whoWeAre, zvit, whatWeDo, team }: typeof content.en = content[locale];
  

  const router = useRouter();
  const path = router?.asPath;

  const pieRef = useRef();

  const [socketActive, setSocketActive] = useState(false);

  const [toasts, setToasts] = useState<Array<IncomeToast>>([]);

  const [counter, setCounter] = useState(0)

  const [teamList, setTeamList] = useState<typeof team.cards>([]);

  const [usd, setUsd] = useState(15);
  const [eur, setEur] = useState(15);
  const [uah, setUah] = useState(60);
  
  const graphClickEvent = () => {
    console.log("HUJ")
  }


  const pieData = {
    labels: ['USD', 'EUR', 'UAH'],
    datasets: [
      {
        label: '#',
        data: [usd, eur, uah],
        backgroundColor: [
          'rgba(201, 234, 212, 1)',
          'rgba(103, 197, 135, 1)',
          'rgba(234, 246, 237, 1)'
        ],
        borderColor: [
          'rgba(37, 106, 60, 1)',
          'rgba(37, 106, 60, 1)',
          'rgba(37, 106, 60, 1)',
        ],
        borderWidth: 1,
      },

    ],
    onClick: graphClickEvent
  };

  useEffect(() => {
    if(team) {
      setTeamList(team.cards)
    }
  }, [team])

  const deleteToast = (id: string) => {
    let list = toasts
    const index = toasts.findIndex(e => e.id === id);

    
    list[index].closed = true;
    setToasts([...list]);


    list.splice(index, 1);
    setToasts([...list]);
  }
  
  useEffect(() => {
    setSocketActive(true);
    
    const newSocket = io('https://c8e5-2a00-1028-8380-96ba-8fa2-907f-27e-b33e.ngrok.io', {
      transports: [
        'websocket'
      ]
    });

    newSocket.on("connect", () => {
      console.log("CONNECT")
    });

    newSocket.on("INCOME", (res: IncomeToast) => setToasts((prev) => {
      let items = prev;



      if(prev.length > 3) {
        return [...items.slice(1), {...res, id: Date.now().toString()}]
      }

      return [...items, {...res, id: Date.now().toString()}]
    }));

    
    return () => {
      newSocket.off("connect", () => {
        console.log("DISCONNECT")
      });
      newSocket.off("INCOME", () => {
        console.log("INCOME OFF")
      });
      newSocket.close()
    }
  }, []);

  const chartRef = useRef<ChartJS>(null);

  const [chartState, setChartState] = useState<'incomes' | 'outcomes'>('incomes');

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    console.log("current: ", chart)

    if (!chart) {
      return;
    }

    // printDatasetAtEvent(getDatasetAtEvent(chart, event));
    // printElementAtEvent(getElementAtEvent(chart, event));
    // printElementsAtEvent(getElementsAtEvent(chart, event));
  };



  return (
    <div className={styles.landing}>
      <Head>
        <title>До Мрії - організація волонтерів. ПОМІНЯТИ</title>
        <meta name="description" content="Mria description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


        <div className={styles.videoWrap} >
          <video muted autoPlay loop>
            <source src="/assets/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoContent}>
            <p>{h1} 🇺🇦</p>
          </div>
        </div>


        <div className={styles.who_we_are} id="who_we_are">
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h1>{whoWeAre.title}</h1>
              <p>{whoWeAre.subTitle}</p>
            </div>

            <div className={styles.content}>
              <div className={styles.left}>
                <p>{whoWeAre.text.first}</p>
                <br />
                <p>{whoWeAre.text.second}</p>
                <br />
                <p>{whoWeAre.text.third}</p>
              </div>
              <div className={styles.right}>
                <img src="/assets/images/who_we_are.png" alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.what_we_do} id="what_we_do">
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h1>{whatWeDo.title}</h1>
              <p>{whatWeDo.subTitle}</p>
            </div>

            <div className={styles.content}>
              <div className={styles.card}>
                <h2>{whatWeDo.cards.card1.title}</h2>
                <p>{whatWeDo.cards.card1.text}</p>
              </div>
              <div className={styles.card}>
                <h2>{whatWeDo.cards.card2.title}</h2>
                <p>{whatWeDo.cards.card2.text}</p>
              </div>
              <div className={styles.card}>
                <h2>{whatWeDo.cards.card3.title}</h2>
                <p>{whatWeDo.cards.card3.text.first}</p>  
                <p>{whatWeDo.cards.card3.text.second}</p>
                <p>{whatWeDo.cards.card3.text.third}</p>
              </div>
              <div className={styles.card}>
                <h2>{whatWeDo.cards.card4.title}</h2>
                <p>{whatWeDo.cards.card4.text.first}</p>
                <p>{whatWeDo.cards.card4.text.second}</p>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.zvit}>
          <div className={styles.wrap}>
            <div className={styles.left}>
              <p className={styles.title}>{zvit.title}</p>
              <p className={styles.subTitle}>{zvit.subTitle}</p>
              
              <p className={styles.some}>{zvit.switcher.last} <span className={styles.selector}>{chartState === 'incomes' ? zvit.switcher.incomes : zvit.switcher.outcomes} <span className={styles.arrow}></span></span></p>
            
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.left}>
                      <div className={styles.top}>
                          <p>Erik Demchak</p>
                      </div>

                      <div className={styles.bottom}>
                          <p className={styles.date}>13.07.2000</p>

                          <p className={styles.amount}>+222.67$</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.legends}></div>
              <div className={styles.chartWrap}>
                <Pie className={styles.customPie} data={pieData} />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.inventors} id="inventors">
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h1>{team.title}</h1>
              <p>{team.subTitle}</p>
            </div>
            <div className={styles.content}>
              {
                teamList ? teamList.map((card, index: number) => {
                  return (
                    <div className={styles.card} key={`card_${index}`}>
                      <div className={styles.image}>
                        <img src={card.img} alt="" />
                      </div>
                      <p>{card.name}</p>
                      <Link href={card.href}>
                        <a>
                          <img src="/assets/images/face.png" alt="" />
                        </a>
                      </Link>
                    </div>
                  )
                })
                :
                null
              }
            </div>
          </div>
        </div>

      <div className={styles.partners} id="partners">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h1>{partners.title}</h1>
            <p>{partners.subTitle}</p>
          </div>

          <div className={styles.content}>
            <Swiper
              spaceBetween={50}
              className={styles.customSlider}
              slidesPerView={3}
              autoplay={true}
            >
              <SwiperSlide>
                <img src="/assets/images/partner1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/partner1.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <footer className={styles.footer} id="partners">
          <div className={styles.wrap}>
              <div className={styles.logo}>
              <img src="/assets/images/footerLogo.png" alt="До мрії лого" className="logo" />
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                    <a href="#">{menu.whoWeAre}</a>
                </li>
                <li><a href="#">{menu.whatWeDo}</a></li>
                <li><a href="#">{menu.team}</a></li>
                {/* <li><a href="#">ЗВІТНІСТЬ</a></li> */}
                <li><a href="#">{menu.partners}</a></li>
                <li><a href="#">{menu.contacts}</a></li>
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
      {/* While loading show animated preloader maybe the logo on white background will do a heartbeat animation */}
      {/* After page is loaded opcaity 0 and stop animation or maybe stop animation and move the preloader out of the webpage frame. */}

      {/* if / or /requisites show landing part with 1 header */}

      {/* else if /workspace show admin part */}

      {/* else show 404 page or do a redirect for the landing page */}


      <Toast onDelete={deleteToast} toastList={toasts} />

      <div className={styles.social}>
        <Link href={'https://t.me/do_mrii'}>
          <div className={styles.telegram}>
            <img src="/assets/images/telegram.png" alt="" />
            <span className={styles.before}></span>
            <span className={styles.after}></span>
          </div>
        </Link>
        
        <Link href={'https://www.instagram.com/domrii.ua/'}>
          <div className={styles.instagram}>
            <img src="/assets/images/instagram.png" alt="" />
            <span className={styles.before}></span>
            <span className={styles.after}></span>
          </div>
        </Link>

        <Link href={'https://www.facebook.com/vg.do.mrii.ua/'}>
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
