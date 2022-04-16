import { NextPage } from 'next/types';
import { useState } from 'react';
import { AdminAddHeader } from '../../../components/AdminAddEditHeader';
import styles from '../../../scss/panel/expenses/Add.module.scss';

const Add: NextPage = () => {
  const [category, setCategory] = useState('military-vest');

  const categoryText = {
    'military-vest': 'Тактичне спорядження',
    'walkie-talkie': 'Технічні засоби',
    'antidepressant': 'Лікарські засоби',
    'army-backpack': 'Військова медецина',
    'wire': 'Предмети побуту',
    'military-tank': 'Транспортні витрати',
    'boot': 'Інше',
  }[category] || '';

  return (
    <div className={styles.container}>
      <AdminAddHeader page={'expenses'} type={'edit'} />
      <div className={styles.createForm}>
        <p>ФІО</p>
        <input type='text' placeholder='Іванов Іван Іванович' />
        <p>Сума</p>
        <input type='text' placeholder='0.00' />
        <div className={styles.category}>
          <p>Категорія</p>
          <p className={styles.categoryText}>{categoryText}</p>
        </div>
        <div className={styles.categories}>
          <div
            style={{marginLeft: 0}}
            className={styles.categoryBtn + ' ' + `${category === 'military-vest' && styles.categoryBtnActive}`}
            onClick={() => setCategory('military-vest')}
          >
            <img src={'../../../assets/images/military-vest.svg'} className={styles.img1} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'walkie-talkie' && styles.categoryBtnActive}`}
            onClick={() => setCategory('walkie-talkie')}
          >
            <img src={'../../../assets/images/walkie-talkie.svg'} className={styles.img2} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'antidepressant' && styles.categoryBtnActive}`}
            onClick={() => setCategory('antidepressant')}
          >
            <img src={'../../../assets/images/antidepressant.svg'} className={styles.img3} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'army-backpack' && styles.categoryBtnActive}`}
            onClick={() => setCategory('army-backpack')}
          >
            <img src={'../../../assets/images/army-backpack.svg'} className={styles.img4} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'wire' && styles.categoryBtnActive}`}
            onClick={() => setCategory('wire')}
          >
            <img src={'../../../assets/images/wire.svg'} className={styles.img5} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'military-tank' && styles.categoryBtnActive}`}
            onClick={() => setCategory('military-tank')}
          >
            <img src={'../../../assets/images/military-tank.svg'} className={styles.img6} />
          </div>
          <div
            className={styles.categoryBtn + ' ' + `${category === 'boot' && styles.categoryBtnActive}`}
            onClick={() => setCategory('boot')}
          >
            <img src={'../../../assets/images/boot.svg'} className={styles.img7} />
          </div>
        </div>
        <div className={styles.createContainer}>
          <p className={styles.create}>Редагувати</p>
        </div>
      </div>
    </div>
  );
};

export default Add;
