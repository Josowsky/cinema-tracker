import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { modalClose } from '../../store/modals';
import { MaterialInput } from '../material.input';


class _ChangeEmailModal extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
  }

  handleCloseClick() {
    const { closeModal, id } = this.props;
    closeModal(id);
  }

  handleEmailUpdate(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state;
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
            <div className="change-modal__title">Zmiana adresu email</div>
            <MaterialInput className="change-modal__input" name="Nowy adres email" onChange={ this.handleEmailUpdate } value={ email }/>
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

const ChangeEmailModal = connect(null, mapDispatchToProps)(_ChangeEmailModal);

export { ChangeEmailModal };
