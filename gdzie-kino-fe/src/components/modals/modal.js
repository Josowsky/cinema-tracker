import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { modalClose } from '../../store/modals';


const _Modal = ({ children, className, closeModal, id }) => {
  const handleOnClick = () => closeModal(id);
  const modalClasses = classnames('modal', className);

  return (
    <div className="modal__container">
      <div className="modal__overlay" onClick={ handleOnClick }></div>
      <div className={ modalClasses }>
        <div className="modal__close" onClick={ handleOnClick }>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        { children }
      </div>
    </div>
  );
};

_Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (id) => dispatch(modalClose(id)),
  };
};

const Modal = connect(null, mapDispatchToProps)(_Modal);

export { Modal };
