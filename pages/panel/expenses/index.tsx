import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AdminHeader } from '../../../components/AdminHeader';
import { AdminTable } from '../../../components/AdminTable';
import styles from '../../../scss/panel/expenses/Expenses.module.scss';

const Expenses: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <AdminHeader page={'expenses'} />
      <AdminTable page={'expenses'} />
    </div>
  );
};

export default Expenses;
