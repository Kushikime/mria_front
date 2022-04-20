import type { NextPage } from 'next';
import { AdminHeader } from '../../../components/AdminHeader';
import { AdminExpensesTable } from '../../../components/AdminTable';
import styles from '../../../scss/panel/expenses/Expenses.module.scss';

const Expenses: NextPage = () => {
  return (
    <div className={styles.container}>
      <AdminHeader page={'expenses'} />
      <AdminExpensesTable />
    </div>
  );
};

export default Expenses;
