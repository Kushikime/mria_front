import { NextPage } from 'next/types';
import { AdminAddHeader } from '../../../components/AdminAddHeader';
import styles from '../../../scss/panel/expenses/Add.module.scss';

const Add: NextPage = () => {
  return (
    <div className={styles.container}>
      <AdminAddHeader page={'expenses'} />
    </div>
  );
};

export default Add;
