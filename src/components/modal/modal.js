import React from 'react';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useHistory } from 'react-router-dom';

import modalStyle from './modal.module.css';

const Modal = ({children}) => {
  
  const history = useHistory();

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      back(e);
    }
  }

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    }
  });

  function onClose(e) {
    if (e.target === e.currentTarget) {
      back(e);
    }
  }

  return (
    <ModalOverlay onClose={onClose}>
      <div className={modalStyle.modal}>
        <span className={modalStyle.close}>
          <CloseIcon type="primary" onClick={onClose} />
        </span>
        {children}
      </div>
    </ModalOverlay>
  )
};

export default Modal;