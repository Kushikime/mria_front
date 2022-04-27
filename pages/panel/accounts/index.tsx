import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getCredentials } from '../../../api/credentials';
import { AccountBlock } from '../../../components/AccountBlock';
import { AdminHeader } from '../../../components/AdminHeader';
import { Credential } from '../../../types/credentials'
import styles from '../../../scss/panel/accounts/Accounts.module.scss';

const Accounts: NextPage = () => {
  const [accounts, setAccounts] = useState<Array<Credential>>([]);

  useEffect(() => {
    getCredentials().then((resp) => {
      console.log('credentials', resp);
      setAccounts(resp.data.records);
    });
  }, []);

  return (
    <div className={styles.container}>
      <AdminHeader page={'accounts'} />
      {accounts.map((account) => (
        <AccountBlock key={account.id} account={account} />
      ))}
    </div>
  );
};

export default Accounts;
