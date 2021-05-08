import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyel from './ingredient.module.css';

const Ingredient = (props) => {
  const ingredientName = "text text_type_main-default " + ingredientStyel.name;
  return (
    <div className={ingredientStyel.ingredient}>
      <img src={props.image} alt={props.name} />
      {props.count ? <Counter count={props.count} size="default" /> : null}
      <div className="text text_type_digits-medium mt-2 mb-2">{props.price} <CurrencyIcon type="primary" /></div>
      <div className={ingredientName}>{props.name}</div>
    </div>
  );
}

export default Ingredient;