import React from 'react';

import ordersInfoStyle from './orders-info.module.css';

const OrdersInfo = () => {

  const ready = `text text_type_digits-default mb-2 ${ordersInfoStyle.ready}`;

  return (
    <div className={ordersInfoStyle.ordersInfo}>
        <div className={ordersInfoStyle.row}>
          <div>
            <h4 className="text text_type_main-medium mb-6">
              Готовы:
            </h4>
            <div className={ordersInfoStyle.numbers}>
              <span className={ready}>
                034533
              </span>
              <span className={ready}>
                034532
              </span>
              <span className={ready}>
                034530
              </span>
              <span className={ready}>
                034527
              </span>
              <span className={ready}>
                034525
              </span>
            </div>
          </div>
          <div>
            <h4 className="text text_type_main-medium mb-6">
              В работе:
            </h4>
            <div className={ordersInfoStyle.numbers}>
              <span className='text text_type_digits-default mb-2'>
                034538
              </span>
              <span className='text text_type_digits-default mb-2'>
                034541
              </span>
              <span className='text text_type_digits-default mb-2'>
                034542
              </span>
            </div>
          </div>
        </div>

        <div className="text text_type_main-medium">
          Выполнено за все время:
        </div>

        <div className={`text text_type_digits-large  mb-15 ${ordersInfoStyle.digital}`}>
          28 752
        </div>

        <div className="text text_type_main-medium">
          Выполнено за сегодня:
        </div>

        <div className={`text text_type_digits-large ${ordersInfoStyle.digital}`}>
          138
        </div>

        </div>
  )
}

export default OrdersInfo;