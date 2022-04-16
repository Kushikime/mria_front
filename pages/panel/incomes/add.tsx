import { NextPage } from 'next/types';
import { useState } from 'react';
import { AdminAddHeader } from '../../../components/AdminAddEditHeader';
import styles from '../../../scss/panel/incomes/Add.module.scss';

const Add: NextPage = () => {
  const [pickedCurrency, setPickedCurrency] = useState('hryvnia');

  return (
    <div className={styles.container}>
      <AdminAddHeader page={'incomes'} type={'add'} />
      <div className={styles.createForm}>
        <p>ФІО</p>
        <input type='text' placeholder='Іванов Іван Іванович' />
        <p>Сума</p>
        <input type='text' placeholder='0.00' />
        <p>Валюта</p>
        <div className={styles.currencies}>
          <div
            className={styles.hryvnia + ' ' + `${pickedCurrency === 'hryvnia' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('hryvnia')}
          >
            <img src={'../../assets/images/hryvnia.svg'} />
          </div>
          <div
            className={styles.dollar + ' ' + `${pickedCurrency === 'dollar' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('dollar')}
          >
            <img src={'../../assets/images/dollar.svg'} />
          </div>
          <div
            className={styles.euro + ' ' + `${pickedCurrency === 'euro' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('euro')}
          >
            <img src={'../../assets/images/euro.svg'} />
          </div>
        </div>
        <div className={styles.createContainer}>
          <p className={styles.create}>Створити</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
