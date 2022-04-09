import { useState } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
    onHelpClick?: () => void;
}





const Header = (props: IHeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src="/assets/images/logo1.svg" alt="До мрії лого" className="logo" />
                    </div>

                    <div className={styles.content}>
                        <ul>
                            <li><a href="#">ХТО МИ</a></li>
                            <li><a href="#">що робимо</a></li>
                            <li><a href="#">КОМАНДА</a></li>
                            <li><a href="#">ЗВІТНІСТЬ</a></li>
                            <li><a href="#">пАРТНЕРИ</a></li>
                            <li><a href="#">Контакти</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.language_drop}>
                        <img src="/assets/images/ua_flag.png" alt="" />    
                        <p>UA</p>
                        <span></span>
                    </div>

                    <div className={styles.btn}>
                        <button><span>Допомогти</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;