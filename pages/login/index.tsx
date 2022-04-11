import { NextPage } from 'next/types';
import styles from '../../scss/login/Login.module.scss';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.login}>Логін</p>
        <div className={styles.email}>
          <p>Email</p>
          <input type="text" placeholder="ivanko.ukraine@gmail.com" />
        </div>
        <div className={styles.password}>
          <p>Пароль</p>
          <input type="text" placeholder="********" />
        </div>
        <button>Увійти</button>
      </div>
    </div>
  );
};

export default Login;
