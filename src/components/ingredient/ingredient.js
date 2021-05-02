import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyel from './ingredient.module.css';

class Ingredient extends React.Component {
  render() {
    const ingredientName = "text text_type_main-default " + ingredientStyel.name;
    return (
      <div className={ingredientStyel.ingredient}>
        <img src={this.props.image} />
        <Counter count={1} size="default" />
        <div className="text text_type_digits-medium mt-2 mb-2">{this.props.price} <CurrencyIcon type="primary" /></div>
        <div className={ingredientName}>{this.props.name}</div>
      </div>
    );
  }
}

export default Ingredient;