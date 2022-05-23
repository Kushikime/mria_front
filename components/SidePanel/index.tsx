import { useRouter } from 'next/router';
import { signOut } from '../../api/auth';
import styles from './SidePanel.module.scss';

export const SidePanel = () => {
  const router = useRouter();

  const onExitClick = () => {
    signOut()
      .then((resp) => {
        console.log('signOut', resp);
      })
      .finally(() => {
        localStorage.clear();
        router.push('/login');
      });
  };

  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        <div className={styles.buttonContainer}>
          <div
            className={styles.active + ' ' + `${router.pathname.includes('expenses') && styles.activeVisible}`}
          ></div>
          <button onClick={() => router.push('/panel/expenses')}>
            <img src={'../assets/images/file-minus.svg'} />
            <p>Витрати</p>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.active + ' ' + `${router.pathname.includes('incomes') && styles.activeVisible}`}></div>
          <button onClick={() => router.push('/panel/incomes')}>
            <img src={'../assets/images/file-plus.svg'} />
            <p>Внески</p>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <div
            className={styles.active + ' ' + `${router.pathname.includes('accounts') && styles.activeVisible}`}
          ></div>
          <button onClick={() => router.push('/panel/accounts')}>
            <img src={'../assets/images/credit-card.svg'} />
            <p>Рахунки</p>
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer + ' ' + styles.buttonBottom}>
        <button onClick={onExitClick}>
          <img src={'../assets/images/exit.svg'} />
          <p>Вихід</p>
        </button>
      </div>
    </div>
  );
};
