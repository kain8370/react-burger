import React from 'react';

import orderDetailsStyle from './order-details.module.css';
import vector1 from '../../images/vector1.svg';
import vector2 from '../../images/vector2.svg';
import vector3 from '../../images/vector3.svg';
import icon from '../../images/icon.svg';
import { useSelector } from 'react-redux';
import { getOrder } from '../../services/actions/get-order';
import { useDispatch } from 'react-redux';
import Loader from '../loader/loader';

import PropTypes from 'prop-types';
import { RESET_ADDED_BUNS, RESET_ADDED_INGREDIENTS, RESET_INGREDIENTS_COUNT } from '../../services/constants';



const OrderDetails = () => {

  const { addedBuns, ingredientsCount } = useSelector( store => ({ addedBuns: store.ingredientsReducer.addedBuns, ingredientsCount: store.ingredientsReducer.ingredientsCount }));
  const order = useSelector(store => store.ingredientsReducer.order);
  const dispatch = useDispatch();

  const classNameVector1 = `${orderDetailsStyle.vector} ${orderDetailsStyle.vector1}`;

  React.useEffect(() => {
    const sendOrder = () => {
      if (localStorage.getItem('userName')){
        const orderData = Object.entries(ingredientsCount).reduce((acc, [id, count]) => {
          if (count) {
            const tmpArr = []
            for (let i = 0; i < count; i++) {
              tmpArr.push(id);
            }
            acc.push(...tmpArr);
          }
          return acc;
        }, []);
        addedBuns.bun?._id && orderData.push(addedBuns.bun._id);
        dispatch({ type: RESET_ADDED_INGREDIENTS });
        dispatch(getOrder(orderData));
        dispatch({ type: RESET_ADDED_BUNS });
        dispatch({ type: RESET_INGREDIENTS_COUNT });
      }
      return;
    }
    sendOrder();
  }, [order.number]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={orderDetailsStyle.container}>
      <div className="text text_type_digits-large mt-20"> 
        {order.orderNumber || <Loader />}
      </div>
      <div className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказа
      </div>
      <div className={orderDetailsStyle.imageContainer}>
        <img src={vector1} className={classNameVector1} alt="vctor" />
        <img src={vector2} className={orderDetailsStyle.vector} alt="vctor" />
        <img src={vector3} className={orderDetailsStyle.vector} alt="vctor" />
        <img src={icon} alt='icon' /> 
      </div>
      <div className='mt-15 mb-2 text text_type_main-default'>
        Ваш заказ начали готовить
      </div>
      <div className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  )
}

OrderDetails.propTypes = {
  numberOrder: PropTypes.number
}

export default OrderDetails;