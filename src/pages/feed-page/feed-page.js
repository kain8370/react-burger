import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrdersInfo from '../../components/orders-info/orders-info';

import bun from '../../images/bun-01.png';
import meat from '../../images/meat-03.png';
import core from '../../images/core.png';
import mineralRings from '../../images/mineral-rings.png';
import sauce from '../../images/sauce-03.png';
import cheese from '../../images/cheese.png';
import sp1 from '../../images/sp-1.png';
import salad from '../../images/salad.png';

import feedPageStyle from './feed-page.module.css';

const FeedPage = () => {

  const priceClassName = `text text_type_digits-default ${feedPageStyle.price}`;
  const countClassName = `text text_type_main-default ${feedPageStyle.count}`;
  const statusClassName = `text text_type_main-default mb-6 ${feedPageStyle.status}`;

  return (
    <div>
      <h2>Лента заказов</h2>
      <div className={feedPageStyle.container}>
        <div className={feedPageStyle.ordersContainer}>

        <div className={feedPageStyle.order}>
          <div className={feedPageStyle.info}>
            <span className="text text_type_digits-default">#034535</span>
            <span className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</span>
          </div>
          <div className="text text_type_main-medium mt-6 mb-2">
            Death Star Starship Main бургер
          </div>
          <div className="text text_type_main-default mb-6">
            Создан
          </div>
          <div className={feedPageStyle.container}>
            <div>
              <span className={feedPageStyle.ingredient}><img  src={bun} alt="bun"/></span>
              <span className={feedPageStyle.ingredient}><img src={meat} alt="meat"/></span>
              <span className={feedPageStyle.ingredient}><img src={core} alt="core"/></span>
              <span className={feedPageStyle.ingredient}><img src={mineralRings} alt="mineral-rings"/></span>
              <span className={feedPageStyle.ingredient}><img src={sauce} alt="sauce"/></span>
            </div>
            <span className={priceClassName}>
              <span className="mr-2">480</span> <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>

        <div className={feedPageStyle.order}>
          <div className={feedPageStyle.info}>
            <span className="text text_type_digits-default">#034534</span>
            <span className="text text_type_main-default text_color_inactive">Сегодня, 13:20 i-GMT+3</span>
          </div>
          <div className="text text_type_main-medium mt-6 mb-2">
            Interstellar бургер
          </div>
          <div className="text text_type_main-default mb-6">
            Готовится
          </div>
          <div className={feedPageStyle.container}>
            <div>
              <span className={feedPageStyle.ingredient}><img  src={bun} alt="bun"/></span>
              <span className={feedPageStyle.ingredient}><img src={meat} alt="meat"/></span>
              <span className={feedPageStyle.ingredient}><img src={core} alt="core"/></span>
              <span className={feedPageStyle.ingredient}><img src={mineralRings} alt="mineral-rings"/></span>
              <span className={feedPageStyle.ingredient}><img src={sauce} alt="sauce"/></span>
              <span className={feedPageStyle.ingredient}><img src={cheese} alt="cheese" className={feedPageStyle.image} /><span className={countClassName}>+3</span></span>
            </div>
            <span className={priceClassName}>
              <span className="mr-2">560</span> <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>

        <div className={feedPageStyle.order}>
          <div className={feedPageStyle.info}>
            <span className="text text_type_digits-default">#034533</span>
            <span className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</span>
          </div>
          <div className="text text_type_main-medium mt-6 mb-2">
            Black Hole Singularity острый бургер
          </div>
          <div className={statusClassName}>
            Выполнен
          </div>
          <div className={feedPageStyle.container}>
            <div>
              <span className={feedPageStyle.ingredient}><img  src={bun} alt="bun"/></span>
              <span className={feedPageStyle.ingredient}><img src={meat} alt="meat"/></span>
              <span className={feedPageStyle.ingredient}><img src={sp1} alt="core"/></span>
              <span className={feedPageStyle.ingredient}><img src={sauce} alt="sauce"/></span>
              <span className={feedPageStyle.ingredient}><img src={salad} alt="salad"/></span>
            </div>
            <span className={priceClassName}>
              <span className="mr-2">510</span> <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>

        <div className={feedPageStyle.order}>
          <div className={feedPageStyle.info}>
            <span className="text text_type_digits-default">#034532</span>
            <span className="text text_type_main-default text_color_inactive">2 дня назад, 21:53 i-GMT+3</span>
          </div>
          <div className="text text_type_main-medium mt-6 mb-2">
            Supernova Infinity бургер
          </div>
          <div className={statusClassName}>
            Выполнен
          </div>
          <div className={feedPageStyle.container}>
            <div>
              <span className={feedPageStyle.ingredient}><img  src={bun} alt="bun"/></span>
              <span className={feedPageStyle.ingredient}><img src={meat} alt="meat"/></span>
              <span className={feedPageStyle.ingredient}><img src={sp1} alt="core"/></span>
              <span className={feedPageStyle.ingredient}><img src={sauce} alt="sauce"/></span>
              <span className={feedPageStyle.ingredient}><img src={salad} alt="salad"/></span>
            </div>
            <span className={priceClassName}>
              <span className="mr-2">510</span> <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
      </div>
        <OrdersInfo />
      </div>
    </div>
  )
}

export default FeedPage;