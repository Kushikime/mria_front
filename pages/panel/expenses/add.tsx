import { NextPage } from 'next/types';
import { AdminAddHeader } from '../../../components/AdminAddHeader';
import styles from '../../../scss/panel/expenses/Add.module.scss';

const Add: NextPage = () => {
  return (
    <div className={styles.container}>
      <AdminAddHeader page={'expenses'} />
      <div className={styles.createForm}>
        <p>ФІО</p>
        <input type='text' placeholder='Іванов Іван Іванович' />
        <p>Сума</p>
        <input type='text' placeholder='0.00' />
        <div className={styles.category}>
          <p>Категорія</p>
          <p className={styles.categoryText}>Медичне обладнання</p>
        </div>
        <div className={styles.categories}>

        </div>
        <div className={styles.createContainer}>
          <p className={styles.create}>Створити</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
