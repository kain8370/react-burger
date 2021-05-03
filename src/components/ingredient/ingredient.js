import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyel from './ingredient.module.css';

class Ingredient extends React.Component {
  render() {
    const ingredientName = "text text_type_main-default " + ingredientStyel.name;
    return (
      <div className={ingredientStyel.ingredient} onClick={() => this.props.onAddIngredient(this.props.id)}>
        <img src={this.props.image} alt={this.props.name} />
        {this.props.count ? <Counter count={this.props.count} size="default" /> : null}
        <div className="text text_type_digits-medium mt-2 mb-2">{this.props.price} <CurrencyIcon type="primary" /></div>
        <div className={ingredientName}>{this.props.name}</div>
      </div>
    );
  }
}

export default Ingredient;