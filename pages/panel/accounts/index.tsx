import type { NextPage } from 'next';
import { AdminHeader } from '../../../components/AdminHeader';
import { AdminTable } from '../../../components/AdminTable';
import styles from '../../../scss/panel/accounts/Accounts.module.scss';

const Accounts: NextPage = () => {
  return (
    <div className={styles.container}>

      <AdminHeader page={'accounts'} />
      <AdminTable page={'accounts'} />
    </div>
  );
};

export default Accounts;
