import React from 'react';
import OrdersInfo from '../../components/orders-info/orders-info';
import Order from '../../components/order/order';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { WS_CONNECTION_START } from '../../services/constants';
import { Link, useLocation } from 'react-router-dom';

import feedPageStyle from './feed-page.module.css';

const FeedPage = () => {

  const dispatch = useDispatch();
  const orders = useSelector(store => store.wsReducer.orders);
  const location = useLocation();

  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ordersElements = orders?.length && orders.map((item, index) => {
    return <Link to={{ pathname: `/feed/${item._id}`, state: {background: location, data: item} }} className={feedPageStyle.link} key={index} ><Order key={index} order={item} /></Link>
  })

  return (
    <div>
      <h2 className={feedPageStyle.title}>Лента заказов</h2>
      <div className={feedPageStyle.container}>
        <div className={feedPageStyle.ordersContainer}>
          {ordersElements}
        </div>
        <OrdersInfo />
      </div>
    </div>
  )
}

export default FeedPage;