import React from 'react';
import styles from './burger-ingredients-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsItem({ img, title, price }) {
  return (
    <li className={`${styles.card} mt-6 mb-8 ml-4 mr-4`}>
      <img className={styles['card-image']} src={img} alt={title} />
      <div className={styles['card-info']}>
        <div className={`${styles['card-price']} text_type_digits-default`}>
          {price}
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles['card-title']} text text_type_main-default`}>{title}</div>
      </div>
    </li>
  );
}

export default BurgerIngredientsItem;

