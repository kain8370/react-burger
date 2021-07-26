import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyle from './ingredient.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_INGREDIENT } from '../../services/constants';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

const Ingredient = React.memo((props) => {
  
  const id = props.id;
  const ingredientName = "text text_type_main-default " + ingredientStyle.name;
  const dispatch = useDispatch();
  const { ingredient, count, addedBuns } = useSelector(store => ({ ingredient: Array.prototype.find.call(store.ingredientsReducer.ingredients, item => item._id === id), count: store.ingredientsReducer.ingredientsCount[id], addedBuns: store.ingredientsReducer.addedBuns }));
  const location = useLocation();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {id}
  })

  return (
    <Link className={ingredientStyle.link} to={{ pathname: `/ingredients/${id}`, state: {background: location, data: ingredient} }}>
      <div className={ingredientStyle.ingredient} ref={dragRef} onClick={() => { dispatch({ type: SET_CURRENT_INGREDIENT, data: ingredient })}}>
        <img src={ingredient.image} alt={ingredient.name} />
        {count ? <Counter count={ count } size="default" /> : null}
        {ingredient._id === addedBuns.bun?._id ? <Counter count={ 2 } size="default" /> : null}
        <div className="text text_type_digits-medium mt-2 mb-2">{ingredient.price} <CurrencyIcon type="primary" /></div>
        <div className={ingredientName}>{ingredient.name}</div>
      </div>
    </Link>
  );
})

Ingredient.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Ingredient;