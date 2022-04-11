import { useRouter } from 'next/router';
import styles from './AdminAddHeader.module.scss';

interface Props {
  page: string;
}

export const AdminAddHeader = ({page}: Props) => {
  const pageEls = {
    'expenses': ['витрати', 'нової витрати'],
    'incomes': ['внеску', 'нового внеску']
  }[page] || ['Error', 'error']

  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.backContainer} onClick={() => router.back()}>
        <img src='../../assets/images/chevron.svg' />
        <p className={styles.backText}>Назад</p>
      </button>
      <div className={styles.title}>
        <p className={styles.titleLeft}>Створення&nbsp;</p>
        <div className={styles.titleRightContainer}>
          <p className={styles.titleRight}>{pageEls[0]}</p>
          <div className={styles.underline + ' ' + `${page === 'expenses' && styles.underlineRed}`}></div>
        </div>
      </div>
      <p className={styles.subTitle}>
        Сторінка для створення {pageEls[1]}, заповніть форму внизу і натисніть “Створити”
      </p>
    </div>
  );
};
