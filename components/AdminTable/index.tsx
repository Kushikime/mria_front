import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './AdminTable.module.scss';

interface Props {
  page: string;
}

export const AdminTable = ({ page }: Props) => {
  const [maxRows, setMaxRows] = useState(7);
  
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        console.log('window.innerHeight', window.innerHeight);
        const rowsNum = Math.ceil((window.innerHeight - 234) / 64) - 1;
        if (rowsNum > 5) {
          setMaxRows(rowsNum);
        }
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.headerDate}>Дата</th>
            <th>{page === 'incomes' ? 'Ім`я' : 'Категорія'}</th>
            {page === 'incomes' && <th className={styles.headerCurrency}>Валюта</th>}
            <th className={styles.headerSum}>Сума</th>
            <th className={styles.headerActions}></th>
          </tr>
        </thead>
        <tbody>
          {Array(maxRows)
            .fill(0)
            .map(() => (
              <tr key={Math.random()} className={styles.tableDataRow}>
                <td className={styles.date}>22.02.2022</td>
                <td className={styles.name}>Мединський Святослав Ігорович</td>
                {page === 'incomes' && <td className={styles.currency}>100$</td>}
                <td>
                  <p className={styles.sum + ' ' + `${page !== 'incomes' && styles.sumRed}`}>2,941.23 ₴</p>
                </td>
                <td>
                  <div className={styles.actions}>
                    <img src={'../assets/images/edit.svg'} onClick={() => router.push(`/panel/${page}/edit`)} />
                    <div className={styles.divider}></div>
                    <img src={'../assets/images/delete.svg'} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <p>1 - 5</p>
        <img src={'../assets/images/chevron.svg'} className={styles.chevronLeft} />
        <img src={'../assets/images/chevron.svg'} className={styles.chevronRight} />
      </div>
    </div>
  );
};
