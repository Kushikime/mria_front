import type { NextPage } from 'next';
import { AdminHeader } from '../../../components/AdminHeader';
import { AdminTable } from '../../../components/AdminTable';
import styles from '../../../scss/panel/incomes/Incomes.module.scss';

const Incomes: NextPage = () => {
  return (
    <div className={styles.container}>
      <AdminHeader page={'incomes'} />
      <AdminTable page={'incomes'} />
    </div>
  );
};

export default Incomes;
