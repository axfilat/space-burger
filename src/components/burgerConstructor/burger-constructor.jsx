import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { BUN } from '../../utils/dataIngredients';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ data }) => {
  const bun = data.find(item => item.type === BUN);
  const list = data.filter(item => item.type !== BUN);
  const sum = bun.price * 2 + list.reduce((total, item) => total + item.price, 0);

  const renderIngredient = (item) => (
    <li className={`${styles['list-item']} mt-4`} key={item.id}>
      <span className={styles.ingredient}><DragIcon type="primary" /></span>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        extraClass={`${styles.ingredient} ml-2`}
      />
    </li>
  );

  return (
    <section className={styles.section}>
      <div className={`${styles.burger} mt-25 ml-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          extraClass={`${styles.ingredient} ml-8`}
        />
        <ul className={`${styles.scroll} mt-4 mb-4`}>
          {list.map(renderIngredient)}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          extraClass={`${styles.ingredient} ml-8`}
        />
      </div>

      <div className={`${styles.total} mr-4 mt-10`}>
        <div className="text text_type_digits-medium mr-2 mb-1">{sum}</div>
        <div className={`${styles['total-icon']} mr-10`}><CurrencyIcon type="primary" /></div>
        <Button htmlType="button" type="primary">Оформить заказ</Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
//
