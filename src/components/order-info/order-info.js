import React from 'react';
import { useHistory } from 'react-router-dom';
import IngredientImage from '../../components/ingredient-image/ingredient-image';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import orderInfoStyle from './order-info.module.css';

const OrderInfo = () => {

  const history = useHistory();
  const order = history.location.state && history.location.state.data;
  const statusDict = { created: 'Создан', pending: 'Готовится', done: 'Выполнен'};
  
  const includesIngredients = useSelector(store => store.ingredientsReducer.ingredients.filter(item => order.ingredients.includes(item._id)));

  const ingredients = order.ingredients.reduce((acc, ingredient) => {
    const index = acc.findIndex(item => item._id === ingredient);
    if (index > -1) {
      acc[index].count += 1;
    } else {
      acc.push({ _id: ingredient, count: 1 });
    }
    return acc;
  }, []);

  const numberClassName = `text text_type_digits-default mb-10 ${orderInfoStyle.number}`;
  const statusClassName = `text text_type_main-default mb-15 ${orderInfoStyle.status}`;
  const ingredientNameClassName = `text text_type_main-default ${orderInfoStyle.ingredientName}`;
  const priceClassName = `text text_type_digits-default ${orderInfoStyle.price}`;
  const date = new Date(order.createdAt);

  const ingredientsElements = includesIngredients.length && includesIngredients.map((item, i) => {
    return (
      <div className={orderInfoStyle.ingredient}>
        <IngredientImage url={item.image} key={i} />
        <div className={ingredientNameClassName}>
          {item.name}
        </div>
        <div className={priceClassName}>
          {`${ingredients.find(i => i._id === item._id).count} x ${item.price}`} <CurrencyIcon />
        </div>
      </div>
    )
  })

  const totalPrice = includesIngredients.reduce((acc, item) => {
    return acc += item.type === 'bun' ? item.price * 2 : item.price;
  }, 0);

  return (
    <div className={orderInfoStyle.orderContainer}>
      <h4 className={numberClassName}>
          {`#${order.number}`}
        </h4>
        <h3 className="text text_type_main-medium mb-3">
          {order.name}
        </h3>
        <div className={statusClassName}>
          {statusDict[order.status]}
        </div>
        <div className="text text_type_main-medium mb-6">
          Состав:
        </div>
        <div className={orderInfoStyle.ingredientContainer}>
          {ingredientsElements}
        </div>
        <div className={orderInfoStyle.total}>
          <div className="text text_type_main-default text_color_inactive">
            {date.toLocaleString()}
          </div>
          <div className={priceClassName}>
            {totalPrice} <CurrencyIcon />
          </div>
        </div>
    </div>
  )
}

export default OrderInfo;