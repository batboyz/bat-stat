import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { cx } from '../../../util/classNames.js';
import './Modal.scss';

const Modal = ({ className, children, onBackgroundClick }) => {

  return ReactDOM.createPortal(
    <div className="modal-background" onClick={onBackgroundClick}>
      <div className={cx("modal", className)} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
  document.getElementsByClassName("App-body")[0])
}

export default Modal;
