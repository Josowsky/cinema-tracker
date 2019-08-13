import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { modalClose } from '../../store/modals';
import { MaterialInput } from '../material.input';


class _ChangePasswordModal extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newPasswordAgain: '',
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
  }

  handleCloseClick() {
    const { closeModal, id } = this.props;
    closeModal(id);
  }

  handleInputUpdate(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { currentPassword, newPassword, newPasswordAgain } = this.state;
    const { className } = this.props;
    const modalClasses = classnames('modal', className);

    return (
      <div className="modal__container">
        <div className="modal__overlay" onClick={ this.handleCloseClick }></div>
        <div className={ modalClasses }>
          <div className="modal__close" onClick={ this.handleCloseClick }>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="change-modal">
            <div className="change-modal__title">Zmiana hasła</div>
            <MaterialInput className="change-modal__input" name="Obecne hasło" type={ 'password' } onChange={ this.handleInputUpdate.bind(this, 'currentPassword') } value={ currentPassword }/>
            <MaterialInput className="change-modal__input" name="Nowe hasło" type={ 'password' } onChange={ this.handleInputUpdate.bind(this, 'newPassword') } value={ newPassword }/>
            <MaterialInput className="change-modal__input" name="Potwierdź hasło" type={ 'password' } onChange={ this.handleInputUpdate.bind(this, 'newPasswordAgain') } value={ newPasswordAgain }/>
            <div className="change-modal__confirm-button">OK</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (id) => dispatch(modalClose(id)),
  };
};

const ChangePasswordModal = connect(null, mapDispatchToProps)(_ChangePasswordModal);

export { ChangePasswordModal };
