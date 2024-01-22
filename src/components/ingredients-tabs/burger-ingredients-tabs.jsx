import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-tabs.module.css';
import { BUN, SAUCE, MAIN, names } from '../../utils/dataIngredients';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsTabs({ tabChange }) {
  const handleClick = (value) => {
    tabChange(value);
  };

  return (
    <div className={`${styles.tabs} mb-8`}>
      <Tab value={BUN} onClick={() => handleClick(BUN)} active={true}>{names[BUN]}</Tab>
      <Tab value={SAUCE} onClick={() => handleClick(SAUCE)}>{names[SAUCE]}</Tab>
      <Tab value={MAIN} onClick={() => handleClick(MAIN)}>{names[MAIN]}</Tab>
    </div>
  );
}

BurgerIngredientsTabs.propTypes = {
  tabChange: PropTypes.func.isRequired,
};

export default BurgerIngredientsTabs;



