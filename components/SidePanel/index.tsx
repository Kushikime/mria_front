import { useRouter } from 'next/router';
import styles from './SidePanel.module.scss';

export const SidePanel = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.active}` + ' ' + `${router.pathname.endsWith('expenses') && styles.activeVisible}`}
          ></div>
          <button onClick={() => router.push('/panel/expenses')}>
            <img src={'../assets/images/file-minus.svg'} />
            <p>Витрати</p>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.active}` + ' ' + `${router.pathname.endsWith('incomes') && styles.activeVisible}`}
          ></div>
          <button onClick={() => router.push('/panel/incomes')}>
            <img src={'../assets/images/file-plus.svg'} />
            <p>Внески</p>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.active}` + ' ' + `${router.pathname.endsWith('accounts') && styles.activeVisible}`}
          ></div>
          <button onClick={() => router.push('/panel/accounts')}>
            <img src={'../assets/images/credit-card.svg'} />
            <p>Рахунки</p>
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer + ' ' + styles.buttonBottom}>
        <button onClick={() => router.push('/logout')}> {/* TODO: Logout page */}
          <img src={'../assets/images/exit.svg'} />
          <p>Вихід</p>
        </button>
      </div>
    </div>
  );
};
