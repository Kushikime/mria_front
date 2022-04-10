import { useRouter } from 'next/router';
import styles from './SidePanel.module.scss';

export const SidePanel = () => {
  const router = useRouter();

  // console.log(router.pathname.endsWith(''))

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.active}></div>
        <button>
          <img src={'/assets/images/instagram.png'} />
          <p>Витрати</p>
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.active}></div>
        <button className={styles.sideButton}>
          <img src={'/assets/images/file-minus.svg'} />
          <p>Внески</p>
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.active}></div>
        <button>
          <img src={'/assets/images/credit-card.svg'} />
          <p>Рахунки</p>
        </button>
      </div>
    </div>
  );
};
