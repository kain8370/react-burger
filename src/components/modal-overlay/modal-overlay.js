import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import modalOverlayStyle from './modal-overlay.module.css';

function ModalOverlay(props) {

  return ReactDOM.createPortal((
    <div  className={modalOverlayStyle.overlay} onClick={(e) => props.onClose(e)}>
      {props.children}
    </div>
    ), document.getElementById('modal'));
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalOverlay;