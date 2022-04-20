import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useState } from 'react';
import { signIn } from '../../api/auth';
import styles from '../../scss/login/Login.module.scss';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSignInClick = () => {
    signIn(email, password).then((resp) => {
      localStorage.setItem('@accessToken', resp.data.accessToken);
      localStorage.setItem('@refreshToken', resp.data.refreshToken);
      if (router.pathname.includes('login')) {
        router.push('/panel');
      } else {
        router.reload();
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.login}>Логін</p>
        <div className={styles.email}>
          <p>Email</p>
          <input
            value={email}
            type='text'
            placeholder='ivanko.ukraine@gmail.com'
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.password}>
          <p>Пароль</p>
          <input
            value={password}
            type='text'
            placeholder='********'
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={onSignInClick}>Увійти</button>
      </div>
    </div>
  );
};

export default Login;
