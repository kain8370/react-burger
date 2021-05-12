import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';

import modalOverlayStyle from './modal-overlay.module.css';

function ModalOverlay(props) {

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      props.onChangeVisible({ visible: !props.visible, data: {}});
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
      props.onChangeVisible({ visible: !props.visible, data: {}});
    }
  }

  return ReactDOM.createPortal((
    <div style={props.visible ? {display: 'flex'} : {display: 'none'}} className={modalOverlayStyle.overlay} onClick={(e) => onClose(e)}>
      <Modal data={props.data} onClose={onClose} already={props.already} children={props.children} />
    </div>
    ), document.getElementById('modal'));
}

export default ModalOverlay;