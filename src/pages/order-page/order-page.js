import React from 'react';

import OrderInfo from '../../components/order-info/order-info';

import orderPageStyle from './order-page.module.css';

const OrderPage = () => {

  return (
    <div className={orderPageStyle.orderPage}>
      <OrderInfo />
    </div>
  )
}

export default OrderPage;