import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyle from './ingredient.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_INGREDIENT } from '../../services/constants';
import { useDrag } from 'react-dnd';

const Ingredient = (props) => {
  const id = props.id;
  const ingredientName = "text text_type_main-default " + ingredientStyle.name;
  const dispatch = useDispatch();
  const { ingredients, ingredientsCount, addedBuns } = useSelector(store => ({ ingredients: store.ingredientsReducer.ingredients, ingredientsCount: store.ingredientsReducer.ingredientsCount, addedBuns: store.ingredientsReducer.addedBuns }));

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {id}
  })

  const findIngredient = () => {
    return ingredients.find(item => item._id === id);
  }

  const ingredient = findIngredient();

  return (
    <div className={ingredientStyle.ingredient} ref={dragRef} onClick={() => { dispatch({ type: SET_CURRENT_INGREDIENT, data: findIngredient() })}}>
      <img src={ingredient.image} alt={ingredient.name} />
      {ingredientsCount[id] ? <Counter count={ ingredientsCount[id]} size="default" /> : null}
      {ingredient._id === addedBuns.bun?._id ? <Counter count={ 2 } size="default" /> : null}
      <div className="text text_type_digits-medium mt-2 mb-2">{ingredient.price} <CurrencyIcon type="primary" /></div>
      <div className={ingredientName}>{ingredient.name}</div>
    </div>
  );
}

Ingredient.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Ingredient;