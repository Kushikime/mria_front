import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { updateIncome } from '../../../api/incomes';
import { AdminAddHeader } from '../../../components/AdminAddEditHeader';
import styles from '../../../scss/panel/incomes/Add.module.scss';
import { IncomeQuery } from '../../../types/incomes';

const Add: NextPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [pickedCurrency, setPickedCurrency] = useState('UAH');

  const router = useRouter();

  const onEditClick = () => {
    const { id, location } = router.query as unknown as IncomeQuery;

    updateIncome({
      id: id.toString(),
      amount: Number(amount),
      currency: pickedCurrency,
      location: location,
      owner: name,
    }).then((resp) => {
      console.log('incomes-update', resp);
      router.back();
    });
  };

  useEffect(() => {
    const { owner, amount, currencyName } = router.query as unknown as IncomeQuery;
    
    setName(owner);
    setAmount(amount);
    setPickedCurrency(currencyName);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <AdminAddHeader page={'incomes'} type={'edit'} />
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
        <div className={styles.createContainer} onClick={onEditClick}>
          <p className={styles.create}>Редагувати</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
