import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { updateWithdrawal } from '../../../api/withdrawals';
import { AdminAddHeader } from '../../../components/AdminAddEditHeader';
import styles from '../../../scss/panel/expenses/Add.module.scss';
import { WithdrawalQuery } from '../../../types/withdrawals';

const Add: NextPage = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('ammo');

  const router = useRouter();

  const categoryText =
    {
      ammo: 'Тактичне спорядження',
      techStuff: 'Технічні засоби',
      medicine: 'Лікарські засоби',
      militaryMedicine: 'Військова медицина',
      house: 'Предмети побуту',
      transports: 'Транспортні витрати',
      other: 'Інше',
    }[category] || '';

  const onEditClick = () => {
    const { id, currencyName } = router.query as unknown as WithdrawalQuery;

    updateWithdrawal({
      id: id,
      amount: Number(amount),
      category: category,
      currency: currencyName,
    }).then((resp) => {
      console.log('withdrawal-edit', resp);
      router.back();
    });
  };

  useEffect(() => {
    const { amount, categoryName } = router.query as unknown as WithdrawalQuery;

    setAmount(amount);
    setCategory(categoryName);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <AdminAddHeader page={'expenses'} type={'edit'} />
      <div className={styles.createForm}>
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
        <div className={styles.category}>
          <p>Категорія</p>
          <p className={styles.categoryText}>{categoryText}</p>
        </div>
        <div className={styles.categories}>
          <div
            style={{ marginLeft: 0 }}
            className={styles.categoryBtn + ' ' + `${category === 'ammo' && styles.categoryBtnActive}`}
            onClick={() => setCategory('ammo')}
          >
            <img src={'../../../assets/images/military-vest.svg'} className={styles.img1} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'techStuff' && styles.categoryBtnActive}`}
            onClick={() => setCategory('techStuff')}
          >
            <img src={'../../../assets/images/walkie-talkie.svg'} className={styles.img2} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'medicine' && styles.categoryBtnActive}`}
            onClick={() => setCategory('medicine')}
          >
            <img src={'../../../assets/images/antidepressant.svg'} className={styles.img3} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'militaryMedicine' && styles.categoryBtnActive}`}
            onClick={() => setCategory('militaryMedicine')}
          >
            <img src={'../../../assets/images/army-backpack.svg'} className={styles.img4} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'house' && styles.categoryBtnActive}`}
            onClick={() => setCategory('house')}
          >
            <img src={'../../../assets/images/wire.svg'} className={styles.img5} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'transports' && styles.categoryBtnActive}`}
            onClick={() => setCategory('transports')}
          >
            <img src={'../../../assets/images/military-tank.svg'} className={styles.img6} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'other' && styles.categoryBtnActive}`}
            onClick={() => setCategory('other')}
          >
            <img src={'../../../assets/images/boot.svg'} className={styles.img7} />
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
