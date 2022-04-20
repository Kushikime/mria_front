import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useState } from 'react';
import { createIncome } from '../../../api/incomes';
import { AdminAddHeader } from '../../../components/AdminAddEditHeader';
import styles from '../../../scss/panel/incomes/Add.module.scss';

const Add: NextPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [pickedCurrency, setPickedCurrency] = useState('UAH');

  const router = useRouter();

  const onCreateClick = () => {
    if (name && amount && !isNaN(Number(amount))) {
      createIncome(name, Number(amount), pickedCurrency).then(resp => {
        console.log('incomes-create', resp);
        router.back();
      });
    } else {
      alert('Заповніть усі поля і перевірте їх коректність');
    }
  };

  return (
    <div className={styles.container}>
      <AdminAddHeader page={'incomes'} type={'add'} />
      <div className={styles.createForm}>
        <p>ФІО</p>
        <input
          type='text'
          value={name}
          placeholder='Іванов Іван Іванович'
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <p>Сума</p>
        <input
          type='text'
          value={amount}
          placeholder='0.00'
          onChange={(e) => {
            e.preventDefault();
            setAmount(e.target.value);
          }}
        />
        <p>Валюта</p>
        <div className={styles.currencies}>
          <div
            className={styles.hryvnia + ' ' + `${pickedCurrency === 'UAH' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('UAH')}
          >
            <img src={'../../assets/images/hryvnia.svg'} />
          </div>
          <div
            className={styles.dollar + ' ' + `${pickedCurrency === 'USD' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('USD')}
          >
            <img src={'../../assets/images/dollar.svg'} />
          </div>
          <div
            className={styles.euro + ' ' + `${pickedCurrency === 'EUR' && styles.currencyPicked}`}
            onClick={() => setPickedCurrency('EUR')}
          >
            <img src={'../../assets/images/euro.svg'} />
          </div>
        </div>
        <div className={styles.createContainer} onClick={onCreateClick}>
          <p className={styles.create}>Створити</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
