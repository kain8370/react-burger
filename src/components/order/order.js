import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientImage from '../ingredient-image/ingredient-image';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import orderStyle from './order.module.css';

const orderPropTypes = PropTypes.shape({
  ingredients: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  createAt: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
});

const Order = React.memo(props => {

  const statusDict = {
    'created': 'Создан',
    'pending': 'Готовится',
    'done': 'Выполнен'
  }

  const ingredients = useSelector(store => store.ingredientsReducer.ingredients.filter(item => props.order.ingredients.includes(item._id)));
  
  const includesIngredients = props.order.ingredients.reduce((acc, ingredient) => {
    const index = acc.findIndex(item => item._id === ingredient);
    if (index > -1) {
      acc[index].count += 1;
    } else {
      acc.push({ _id: ingredient, count: 1 });
    }
    return acc;
  }, []);

  const images = ingredients.length && includesIngredients?.map(ingredient => ({ image: ingredients.find(item => item._id === ingredient._id)?.image, count: ingredient.count }));
  const date = new Date(props.order.createdAt);

  const price = ingredients.reduce((acc, item) => {
    return acc += item.type === 'bun' ? item.price * 2 : item.price;
  }, 0);

  const priceClassName = `text text_type_digits-default ${orderStyle.price}`;
  const statusClassName = `text text_type_main-default mb-6 ${orderStyle.status}`;
  
  return (
    <div className={orderStyle.order}>
          <div className={orderStyle.info}>
            <span className="text text_type_digits-default">{`#${props.order.number}`}</span>
            <span className="text text_type_main-default text_color_inactive">{date.toLocaleString()}</span>
          </div>
          <div className="text text_type_main-medium mt-6 mb-2">
            {props.order.name}
          </div>
          <div className={statusDict[props.order.status] === 'Выполнен' ? statusClassName : "text text_type_main-default mb-6"}>
            {statusDict[props.order.status]}
          </div>
          <div className={orderStyle.container}>
            <div className={orderStyle.imageContainer}>
              {images.length && images.map((item, i) => {
                return item.image && <IngredientImage key={i} url={item.image} count={item.count ? item.count : null} zIndex={100 - i} />
              })}
            </div>
            <span className={priceClassName}>
              <span className="mr-2">{price}</span> <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
  )
});

Order.PropTypes = {
  order: orderPropTypes.isRequired
}

export default Order;