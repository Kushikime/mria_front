/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { deleteIncome, getIncomes } from '../../api/incomes';
import { deleteWithdrawal, getWithdrawals } from '../../api/withdrawals';
import { Pagination, ResponseData } from '../../types';
import { Income } from '../../types/incomes';
import { Withdrawal } from '../../types/withdrawals';
import styles from './AdminTable.module.scss';

interface Props {
  page: string;
  pagination?: Pagination;
  withdrawals?: Array<Withdrawal>;
  incomes?: Array<Income>;
}

export const AdminTable = ({ page, pagination, withdrawals = [], incomes = [] }: Props) => {
  const [maxRows, setMaxRows] = useState(7);

  const router = useRouter();

  const getCurrencySign = (currency: string): string => {
    switch (currency) {
      case 'UAH':
        return '₴';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '!';
    }
  };

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

export const AdminExpensesTable = () => {
  const [pagination, setPagination] = useState<Pagination>(null);
  const [records, setRecords] = useState<Array<Withdrawal>>([]);
  const [page, setPage] = useState<number>(1);
  const [maxRows, setMaxRows] = useState<number>(7);

  const router = useRouter();

  const getCategoryText = (category: string) => {
    return (
      {
        ammo: 'Тактичне спорядження',
        techStuff: 'Технічні засоби',
        medicine: 'Лікарські засоби',
        militaryMedicine: 'Військова медицина',
        house: 'Предмети побуту',
        transports: 'Транспортні витрати',
        other: 'Інше',
      }[category] || ''
    );
  };

  const getCurrencySign = (currency: string): string => {
    switch (currency) {
      case 'UAH':
        return '₴';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '!';
    }
  };

  const onSetPage = (page: number) => {
    if (page < 1 || page > pagination.pages) {
      return;
    } else {
      setPage(page);
    }
  };

  const onDelete = (id: number) => {
    deleteWithdrawal(id).then((resp) => {
      console.log('withdrawal-delete', resp);
      getWithdrawals(page, maxRows).then((resp) => {
        console.log('withdrawals', resp);
        setPagination(resp.data.pagination);
        setRecords(resp.data.records);
      });
    });
  };

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

  useEffect(() => {
    getWithdrawals(page, maxRows).then((resp) => {
      console.log('withdrawals', resp);
      setPagination(resp.data.pagination);
      setRecords(resp.data.records);
    });
  }, [page, maxRows]);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.headerDate}>Дата</th>
            <th>Категорія</th>
            <th className={styles.headerSum}>Сума</th>
            <th className={styles.headerActions}></th>
          </tr>
        </thead>
        <tbody>
          {(records.length &&
            records.map((wth) => (
              <tr key={`withdrawal-${wth.id}`} className={styles.tableDataRow}>
                <td className={styles.date}>{new Date(wth.createdAt).toLocaleDateString()}</td>
                <td className={styles.name}>{getCategoryText(wth.categoryName)}</td>
                <td>
                  <p className={styles.sum + ' ' + styles.sumRed}>
                    {wth.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {getCurrencySign(wth.currencyName)}
                  </p>
                </td>
                <td>
                  <div className={styles.actions}>
                    <img
                      src={'../assets/images/edit.svg'}
                      onClick={() => router.push({ pathname: `/panel/expenses/edit`, query: { ...wth } })}
                    />
                    <div className={styles.divider}></div>
                    <img src={'../assets/images/delete.svg'} onClick={() => onDelete(wth.id)} />
                  </div>
                </td>
              </tr>
            ))) ||
            null}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <p>
          {pagination?.page} - {pagination?.pages}
        </p>
        <img src={'../assets/images/chevron.svg'} className={styles.chevronLeft} onClick={() => onSetPage(page - 1)} />
        <img src={'../assets/images/chevron.svg'} className={styles.chevronRight} onClick={() => onSetPage(page + 1)} />
      </div>
    </div>
  );
};

export const AdminIncomesTable = () => {
  const [pagination, setPagination] = useState<Pagination>(null);
  const [records, setRecords] = useState<Array<Income>>([]);
  const [page, setPage] = useState<number>(1);
  const [maxRows, setMaxRows] = useState(7);

  const getCurrencySign = (currency: string): string => {
    switch (currency) {
      case 'UAH':
        return '₴';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '!';
    }
  };

  const onSetPage = (page: number) => {
    if (page < 1 || page > pagination.pages) {
      return;
    } else {
      setPage(page);
    }
  };

  const onDelete = (id: number) => {
    deleteIncome(id).then((resp) => {
      console.log('income-delete', resp);
      getIncomes(page, maxRows).then((resp) => {
        console.log('incomes', resp);
        setPagination(resp.data.pagination);
        setRecords(resp.data.records);
      });
    });
  };

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

  useEffect(() => {
    getIncomes(page, maxRows).then((resp) => {
      console.log('incomes', resp);
      setPagination(resp.data.pagination);
      setRecords(resp.data.records);
    });
  }, [page, maxRows]);

  const router = useRouter();

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.headerDate}>Дата</th>
            <th>Ім`я</th>
            <th className={styles.headerCurrency}>Валюта</th>
            <th className={styles.headerSum}>Сума</th>
            <th className={styles.headerActions}></th>
          </tr>
        </thead>
        <tbody>
          {(records.length &&
            records.map((inc) => (
              <tr key={`income-${inc.id}`} className={styles.tableDataRow}>
                <td className={styles.date}>{new Date(inc.createdAt).toLocaleDateString()}</td>
                <td className={styles.name}>{inc.owner}</td>
                <td className={styles.currency}>{`${inc.amount}${getCurrencySign(inc.currencyName)}`}</td>
                <td>
                  <p className={styles.sum}>
                    {inc.amountUah.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₴
                  </p>
                </td>
                <td>
                  <div className={styles.actions}>
                    <img
                      src={'../assets/images/edit.svg'}
                      onClick={() => router.push({ pathname: `/panel/incomes/edit`, query: { ...inc } })}
                    />
                    <div className={styles.divider}></div>
                    <img src={'../assets/images/delete.svg'} onClick={() => onDelete(inc.id)} />
                  </div>
                </td>
              </tr>
            ))) ||
            null}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <p>
          {pagination?.page} - {pagination?.pages}
        </p>
        <img src={'../assets/images/chevron.svg'} className={styles.chevronLeft} onClick={() => onSetPage(page - 1)} />
        <img src={'../assets/images/chevron.svg'} className={styles.chevronRight} onClick={() => onSetPage(page + 1)} />
      </div>
    </div>
  );
};
