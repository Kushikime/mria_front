import { useRouter } from 'next/router';
import styles from './AdminHeader.module.scss';

interface Props {
  page: string;
}

export const AdminHeader = ({ page }: Props) => {
  const pageEls = {
    expenses: ['Витрати', '../assets/images/file-minus.svg', 'витрату'],
    incomes: ['Внески', '../assets/images/file-plus.svg', 'внесок'],
    accounts: ['Рахунки', '../assets/images/credit-card.svg'],
  }[page] || ['Error', '', 'error'];

  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <p>{pageEls[0]}</p>
          {page !== 'accounts' && <div className={`${styles.underline}` + ' ' + `${page === 'expenses' && styles.underlineRed}`}></div>}
        </div>
        <img src={pageEls[1]} />
      </div>
      {page !== 'accounts' && (
        <>
          <div className={styles.searchBar}>
            <img src={'../assets/images/search.svg'} />
            <input type='text' placeholder='...' />
          </div>
          <button onClick={() => router.push(`/panel/${page}/add`)}>
            <p>Додати {pageEls[2]}</p>
            <img src={'../assets/images/plus.svg'} />
          </button>
        </>
      )}
    </div>
  );
};
