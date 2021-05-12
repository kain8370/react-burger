import React from 'react';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import modalStyle from './modal.module.css';

const Modal = props => {
  const classNameHeader = `${modalStyle.header} text text_type_main-large`;
  return (
    <div className={modalStyle.modal}>
      <span className={modalStyle.close}>
        <CloseIcon type="primary" onClick={(e) => props.onClose(e)} />
      </span>
      {props.children}
    </div>
  )
};

export default Modal;