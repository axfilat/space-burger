import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import { BUN, SAUCE, MAIN, names } from '../../utils/dataIngredients';
import BurgerIngredientsTabs from '../ingredients-tabs/burger-ingredients-tabs';
import BurgerIngredientsItem from '../ingredients-item/burger-ingredients-item';

function BurgerIngredients({ data }) {
  const groups = {};
  groups[BUN] = data.filter(i => i.type === BUN);
  groups[SAUCE] = data.filter(i => i.type === SAUCE);
  groups[MAIN] = data.filter(i => i.type === MAIN);

  const headers = {};
  headers[BUN] = useRef(null);
  headers[SAUCE] = useRef(null);
  headers[MAIN] = useRef(null);

  function tabChange(value) {
    headers[value].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTabs tabChange={tabChange} />

      <div className={styles.list}>
        {[BUN, SAUCE, MAIN].map((type, typeIndex) => (
          <div key={typeIndex}>
            <h2 className="text text_type_main-medium mt-2" ref={headers[type]}>{names[type]}</h2>
            <ul className={styles['group-content']}>
              {groups[type].map((item, index) => (
                <BurgerIngredientsItem title={item.name} price={item.price} img={item.image} key={type + index} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerIngredients;

