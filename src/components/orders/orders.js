import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ordersStyle from './orders.module.css';

import bun from '../../images/bun-01.png';
import meat from '../../images/meat-03.png';
import core from '../../images/core.png';
import mineralRings from '../../images/mineral-rings.png';
import sauce from '../../images/sauce-03.png';
import cheese from '../../images/cheese.png';
import sp1 from '../../images/sp-1.png';
import salad from '../../images/salad.png';

const Orders = () => {

  const priceClassName = `text text_type_digits-default ${ordersStyle.price}`;
  const countClassName = `text text_type_main-default ${ordersStyle.count}`;
  const statusClassName = `text text_type_main-default mb-6 ${ordersStyle.status}`;

  return (
    <div className={ordersStyle.ordersContainer}>

      <div className={ordersStyle.order}>
        <div className={ordersStyle.info}>
          <span className="text text_type_digits-default">#034535</span>
          <span className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</span>
        </div>
        <div className="text text_type_main-medium mt-6 mb-2">
          Death Star Starship Main бургер
        </div>
        <div className="text text_type_main-default mb-6">
          Создан
        </div>
        <div className={ordersStyle.container}>
          <div>
            <span className={ordersStyle.ingredient}><img  src={bun} alt="bun"/></span>
            <span className={ordersStyle.ingredient}><img src={meat} alt="meat"/></span>
            <span className={ordersStyle.ingredient}><img src={core} alt="core"/></span>
            <span className={ordersStyle.ingredient}><img src={mineralRings} alt="mineral-rings"/></span>
            <span className={ordersStyle.ingredient}><img src={sauce} alt="sauce"/></span>
          </div>
          <span className={priceClassName}>
            <span className="mr-2">480</span> <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>

      <div className={ordersStyle.order}>
        <div className={ordersStyle.info}>
          <span className="text text_type_digits-default">#034534</span>
          <span className="text text_type_main-default text_color_inactive">Сегодня, 13:20 i-GMT+3</span>
        </div>
        <div className="text text_type_main-medium mt-6 mb-2">
          Interstellar бургер
        </div>
        <div className="text text_type_main-default mb-6">
          Готовится
        </div>
        <div className={ordersStyle.container}>
          <div>
            <span className={ordersStyle.ingredient}><img  src={bun} alt="bun"/></span>
            <span className={ordersStyle.ingredient}><img src={meat} alt="meat"/></span>
            <span className={ordersStyle.ingredient}><img src={core} alt="core"/></span>
            <span className={ordersStyle.ingredient}><img src={mineralRings} alt="mineral-rings"/></span>
            <span className={ordersStyle.ingredient}><img src={sauce} alt="sauce"/></span>
            <span className={ordersStyle.ingredient}><img src={cheese} alt="cheese" className={ordersStyle.image} /><span className={countClassName}>+3</span></span>
          </div>
          <span className={priceClassName}>
            <span className="mr-2">560</span> <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>

      <div className={ordersStyle.order}>
        <div className={ordersStyle.info}>
          <span className="text text_type_digits-default">#034533</span>
          <span className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</span>
        </div>
        <div className="text text_type_main-medium mt-6 mb-2">
          Black Hole Singularity острый бургер
        </div>
        <div className={statusClassName}>
          Выполнен
        </div>
        <div className={ordersStyle.container}>
          <div>
            <span className={ordersStyle.ingredient}><img  src={bun} alt="bun"/></span>
            <span className={ordersStyle.ingredient}><img src={meat} alt="meat"/></span>
            <span className={ordersStyle.ingredient}><img src={sp1} alt="core"/></span>
            <span className={ordersStyle.ingredient}><img src={sauce} alt="sauce"/></span>
            <span className={ordersStyle.ingredient}><img src={salad} alt="salad"/></span>
          </div>
          <span className={priceClassName}>
            <span className="mr-2">510</span> <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>

      <div className={ordersStyle.order}>
        <div className={ordersStyle.info}>
          <span className="text text_type_digits-default">#034532</span>
          <span className="text text_type_main-default text_color_inactive">2 дня назад, 21:53 i-GMT+3</span>
        </div>
        <div className="text text_type_main-medium mt-6 mb-2">
          Supernova Infinity бургер
        </div>
        <div className={statusClassName}>
          Выполнен
        </div>
        <div className={ordersStyle.container}>
          <div>
            <span className={ordersStyle.ingredient}><img  src={bun} alt="bun"/></span>
            <span className={ordersStyle.ingredient}><img src={meat} alt="meat"/></span>
            <span className={ordersStyle.ingredient}><img src={sp1} alt="core"/></span>
            <span className={ordersStyle.ingredient}><img src={sauce} alt="sauce"/></span>
            <span className={ordersStyle.ingredient}><img src={salad} alt="salad"/></span>
          </div>
          <span className={priceClassName}>
            <span className="mr-2">510</span> <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Orders;