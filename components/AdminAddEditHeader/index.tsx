import { useRouter } from 'next/router';
import styles from './AdminAddEditHeader.module.scss';

interface Props {
  page: string;
  type: 'add' | 'edit';
}

export const AdminAddHeader = ({ page, type }: Props) => {
  const router = useRouter();

  const pageType = {
    add: {
      expenses: ['Створення', 'витрати', 'створення нової витрати'],
      incomes: ['Створення', 'внеску', 'створення нового внеску'],
    },
    edit: {
      expenses: ['Редагування', 'витрати', 'редагування існуючої витрати'],
      incomes: ['Редагування', 'внеску', 'редагування існуючого внеску'],
    },
  }[type] || {};

  const pageEls = pageType[page] || ['Error', 'error', 'error'];

  return (
    <div className={styles.container}>
      <button className={styles.backContainer} onClick={() => router.back()}>
        <img src='../../assets/images/chevron.svg' />
        <p className={styles.backText}>Назад</p>
      </button>
      <div className={styles.title}>
        <p className={styles.titleLeft}>{pageEls[0]}&nbsp;</p>
        <div className={styles.titleRightContainer}>
          <p className={styles.titleRight}>{pageEls[1]}</p>
          <div className={styles.underline + ' ' + `${page === 'expenses' && styles.underlineRed}`}></div>
        </div>
      </div>
      <p className={styles.subTitle}>
        Сторінка для {pageEls[2]}, заповніть форму внизу і натисніть “Створити”
      </p>
    </div>
  );
};
