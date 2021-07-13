import React from 'react';

import orderDetailsStyle from './order-details.module.css';
import vector1 from '../../images/vector1.svg';
import vector2 from '../../images/vector2.svg';
import vector3 from '../../images/vector3.svg';
import icon from '../../images/icon.svg';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';



const OrderDetails = () => {

  const order = useSelector( store => store.ingredientsReducer.order );
  console.log(order);
  const classNameVector1 = `${orderDetailsStyle.vector} ${orderDetailsStyle.vector1}`;
  return (
    <div className={orderDetailsStyle.container}>
      <div className="text text_type_digits-large mt-20"> 
        {order.orderNumber}
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