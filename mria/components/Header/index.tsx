import styles from './Header.module.scss';

interface IHeaderProps {

}

const Header = (props: IHeaderProps) => {

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src="/assets/images/logo.svg" alt="До мрії лого" className="logo" />
                </div>

                <div className={styles.content}>
                    <ul>
                        <li><a href="#">Test 1</a></li>
                        <li><a href="#">Test 2</a></li>
                        <li><a href="#">Test 3</a></li>
                        <li><a href="#">Test 4</a></li>
                        <li><a href="#">Test 5</a></li>
                        <li><a href="#">Test 6</a></li>
                        <li><a href="#">Test 7</a></li>
                    </ul>
                </div>

                <div className={styles.btn}>
                    <button><span>Допомогти</span></button>
                </div>
            </div>
        </div>
    )
}

export default Header;