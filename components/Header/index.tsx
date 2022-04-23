import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import _ from 'underscore';
import styles from './Header.module.scss';

interface IHeaderProps {
    onHelpClick?: () => void;
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
      helpBtn: 'Допомогти'
    },
  };


const Header = (props: IHeaderProps) => {
    const { locale, locales, defaultLocale } = useRouter();

    //@ts-ignore
    const { menu, helpBtn } = content[locale];


    const [mobileMenuState, setMobileMenuState] = useState(false);

    const mobileMenuToggler = () => {
        setMobileMenuState((prev) => !prev)
    }

    const [langDropDownState, setLangDropDownState] = useState(false)

    const toggleLangDropDown = () => {
        setLangDropDownState(prev => !prev)
    }

    const onLangSelect = (lang: string) => {
        console.log("LANG: ", lang)
    }

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src="/assets/images/logo1.svg" alt="До мрії лого" className="logo" />
                    </div>

                    <div className={styles.content}>
                        <ul>
                            <li>
                                <a href="#who_we_are">{menu.whoWeAre}</a>
                            </li>
                            <li><a href="#what_we_do">{menu.whatWeDo}</a></li>
                            <li><a href="#inventors">{menu.team}</a></li>
                            {/* <li><a href="#">ЗВІТНІСТЬ</a></li> */}
                            <li><a href="#partners">{menu.partners}</a></li>
                            <li><a href="#contacts">{menu.contacts}</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.language_drop} onClick={toggleLangDropDown}>
                        {/* active element */}
                        <p>{locale.toLocaleUpperCase()}</p>
                        <span></span>

                        {/* selectOptions */}
                        {
                            langDropDownState ?
                            <ul>
                                {
                                    locales.filter(item => item !== locale).map((lang, index) => {
                                        return <Link href={'/'} locale={lang} key={`dropDown_${lang}_${index}`}>
                                            <li onClick={(e) => {onLangSelect(lang)}}>
                                                <p>{lang.toLocaleUpperCase()}</p>
                                            </li>
                                        </Link>
                                    })
                                }
                            </ul>
                            :
                            <></>
                        }
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.gradientBorder}>
                            {/* <button></button> */}
                            <span>{helpBtn}</span>
                            <img src="/assets/images/ua_flag.png" alt="" />    
                        </div>
                    </div>
                    {/* mobileMenuState */}
                    <div onClick={mobileMenuToggler} className={`${styles.mobileMenuToggler} ${mobileMenuState ? styles.activeMobileMenuToggler : ''}`}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={`${styles.mobileMenu}  ${mobileMenuState ? styles.mobileMenuActive : ''}`}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <img src="/assets/images/logo2.svg" alt="До мрії лого" className="logo" />
                    </div>
                </div>

                <div className={styles.content}>
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

                    <div className={styles.btn}>
                        <div className={styles.gradientBorder}>
                            {/* <button></button> */}
                            <span>{helpBtn}</span>
                            <img src="/assets/images/ua_flag.png" alt="" />    
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
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

                        <Link href={'#'}>
                            <div className={styles.twitter}>
                            <img src="/assets/images/footerTwitter.svg" alt="" />
                            <span className={styles.before}></span>
                            <span className={styles.after}></span>
                            </div>
                        </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Header;