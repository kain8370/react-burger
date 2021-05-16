import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyle from './ingredient.module.css';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
  // const [state, dispatch] = React.useContext(ItemCountContext);
  // console.log(state);
  const id = props.id;
  const ingredientName = "text text_type_main-default " + ingredientStyle.name;

  return (
    <div className={ingredientStyle.ingredient} onClick={() => { /*dispatch({type: 'add', id, ingredientType: props.type});*/ props.onToggleVisible(id); props.addIngredient(id)}}>
      <img src={props.image} alt={props.name} />
      {props.count ? <Counter count={props.count} size="default" /> : null}
      <div className="text text_type_digits-medium mt-2 mb-2">{props.price} <CurrencyIcon type="primary" /></div>
      <div className={ingredientName}>{props.name}</div>
    </div>
  );
}

Ingredient.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number,
  onToggleVisible: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired
}

export default Ingredient;