import React from 'react';
import { useSelector } from 'react-redux';

import ordersInfoStyle from './orders-info.module.css';

const OrdersInfo = () => {

  const ready = `text text_type_digits-default mb-2 ${ordersInfoStyle.ready}`;

  const total = useSelector(store => store.wsReducer.total);
  const totalToday = useSelector(store => store.wsReducer.totalToday);
  const orders = useSelector(store => store.wsReducer.orders);

  const ordersDone = orders.filter(item => item.status === 'done')

  const ordersPending = orders.filter(item => item.status === 'pending')

  return (
    <div className={ordersInfoStyle.ordersInfo}>
        <div className={ordersInfoStyle.row}>
          <div>
            <h4 className="text text_type_main-medium mb-6">
              Готовы:
            </h4>
            <div className={ordersInfoStyle.numbers}>
              {ordersDone.length && ordersDone.map((item, index) => {
                return (
                  <span className={ready} key={index}>
                    {item.number}
                  </span>
                )
              })}
            </div>
          </div>
          <div>
            <h4 className="text text_type_main-medium mb-6">
              В работе:
            </h4>
            <div className={ordersInfoStyle.numbers}>
              {ordersPending.length ? ordersPending.map((item, index) => {
                return (
                  <span className='text text_type_digits-default mb-2' key={index}>
                    {item.number}
                  </span>
                )
              }) : null}
            </div>
          </div>
        </div>

        <div className="text text_type_main-medium">
          Выполнено за все время:
        </div>

        <div className={`text text_type_digits-large mb-6 ${ordersInfoStyle.digital}`}>
          {total}
        </div>

        <div className="text text_type_main-medium">
          Выполнено за сегодня:
        </div>

        <div className={`text text_type_digits-large ${ordersInfoStyle.digital}`}>
          {totalToday}
        </div>

        </div>
  )
}

export default OrdersInfo;