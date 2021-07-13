import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import { useDispatch } from 'react-redux';
import { REMOVE_CURRENT_INGREDIENT, CLEAN_ORDER } from '../../services/constants';

import modalOverlayStyle from './modal-overlay.module.css';

function ModalOverlay(props) {

  const dispatch = useDispatch();

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      dispatch({ type: REMOVE_CURRENT_INGREDIENT });
      dispatch({ type: CLEAN_ORDER });
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    }
  });

  function onClose(e) {
    if (e.target === e.currentTarget) {
      dispatch({ type: REMOVE_CURRENT_INGREDIENT });
      dispatch({ type: CLEAN_ORDER });
    }
  }

  return ReactDOM.createPortal((
    <div /*style={props.visible ? {display: 'flex'} : {display: 'none'}}*/ className={modalOverlayStyle.overlay} onClick={(e) => onClose(e)}>
      <Modal onClose={onClose} children={props.children} />
    </div>
    ), document.getElementById('modal'));
}

export default ModalOverlay;