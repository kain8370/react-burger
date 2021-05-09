import React from 'react';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import modalStyle from './modal.module.css';

const Modal = props => {
  const classNameHeader = `${modalStyle.header} text text_type_main-large`;
  return (
    <div className={modalStyle.modal}>
      <header className={classNameHeader}>
      <h3 className={modalStyle.title}>{!props.already ? "Детали ингрединта" : null}</h3>
      <span className={modalStyle.close}>
        <CloseIcon type="primary" onClick={(e) => props.onClose(e)} />
      </span>
    </header>
    {!props.already ? <IngredientDetails {...props} /> : <OrderDetails data={props.data} />}
    </div>
  )
};

export default Modal;