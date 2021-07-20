import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import modalOverlayStyle from './modal-overlay.module.css';

function ModalOverlay(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      back(e);
    }
  }

  let back = e => {
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

  return ReactDOM.createPortal((
    <div  className={modalOverlayStyle.overlay} onClick={(e) => onClose(e)}>
      <Modal onClose={onClose} children={props.children} />
    </div>
    ), document.getElementById('modal'));
}

export default ModalOverlay;