import React from 'react';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Bun from '../bun/bun';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';

import burgerConstructorStyle from './burger-constructor.module.css';
import { ADD_INGREDIENT, ADD_BUN, SET_TOTAL_PRICE } from '../../services/constants';
import { getOrder } from '../../services/actions/get-order';
import { Link } from 'react-router-dom';

const BurgerConstructor = () => {

  const { ingredients, addedIngredients, addedBuns, totalPrice } = useSelector(store => ({ ingredients: store.ingredientsReducer.ingredients, addedIngredients: store.ingredientsReducer.addedIngredients, addedBuns: store.ingredientsReducer.addedBuns, totalPrice: store.ingredientsReducer.totalPrice }));
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      const ingredient = ingredients.find(item => item._id === itemId.id);
      ingredient?.type === 'bun' ? dispatch({ type: ADD_BUN, ingredient}) :  dispatch({ type: ADD_INGREDIENT, ingredient})
    }
  })

  const elements = addedIngredients.map((item, index) => {
    return (
    <ConstructorIngredient key={index} item={item} index={index} />
    )
  })

  const getTotalPrice = () => {
    console.log(addedIngredients);
    const ingredientsPrice = addedIngredients.reduce((acc, item) =>  acc + item.price, 0)
    const bunsPrice = addedBuns?.bun ? addedBuns.bun.price * addedBuns.count : 0;
    dispatch({type: SET_TOTAL_PRICE, totalPrice: ingredientsPrice + bunsPrice})
  }

  React.useEffect(() => {
    getTotalPrice();
   }, [addedIngredients, addedBuns])

  return (
    <div className={burgerConstructorStyle.wrapper} ref={dropTarget}>
      {addedBuns.bun && <Bun type='top' text={`${addedBuns.bun.name} (верх)`}
          price={addedBuns.bun.price}
          id={addedBuns.bun._id}
          thumbnail={addedBuns.bun.image} />}
      <section className={burgerConstructorStyle.container}>
        
        {elements}   
          
      </section>
      {addedBuns.bun && <Bun type='bottom' text={`${addedBuns.bun.name} (низ)`}
          price={addedBuns.bun.price}
          id={addedBuns.bun._id}
          thumbnail={addedBuns.bun.image} />} 
    <div className={burgerConstructorStyle.order}>
    <p className="text text_type_digits-medium">{totalPrice}</p><div className="ml-3 mr-10"><CurrencyIcon type="primary" /></div>
      <Link to='/order'><Button type="primary" size="medium">
        Оформить заказ
      </Button></Link>
    </div>
    
  </div>  
  );
}

export default BurgerConstructor;