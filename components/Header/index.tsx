import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
                                <a href="#">{menu.whoWeAre}</a>
                            </li>
                            <li><a href="#">{menu.whatWeDo}</a></li>
                            <li><a href="#">{menu.team}</a></li>
                            {/* <li><a href="#">ЗВІТНІСТЬ</a></li> */}
                            <li><a href="#">{menu.partners}</a></li>
                            <li><a href="#">{menu.contacts}</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.language_drop}>
                        
                        <p>UA</p>
                        <span></span>
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.gradientBorder}>
                            {/* <button></button> */}
                            <span>{helpBtn}</span>
                            <img src="/assets/images/ua_flag.png" alt="" />    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;