import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WS_CONNECTION_START } from '../../services/constants';
import { Link, useLocation } from 'react-router-dom';
import Order from '../order/order';

import ordersStyle from './orders.module.css';

const Orders = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, userOrders: true })
  }, []);

  const orders = useSelector(store => store.wsReducer.orders);
  const newOrders = orders?.length && [...orders].reverse();
  const location = useLocation();
  const ordersElements = newOrders?.length && newOrders.map((item, index) => {
    return <Link to={{ pathname: `/profile/orders/${item._id}`, state: {background: location, data: item} }} className={ordersStyle.link} key={index} ><Order key={index} order={item} /></Link>
  })

  return (
    <div className={ordersStyle.ordersContainer}>

      {ordersElements}

    </div>
  )
}

export default Orders;