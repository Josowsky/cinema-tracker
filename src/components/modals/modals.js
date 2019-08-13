import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import classnames from 'classnames';

import {
  MODAL_CHANGE_EMAIL,
  MODAL_CHANGE_PASSWORD,
  MODAL_FILMS_FILTERS,
  MODAL_COPYRIGHT,
} from '../../store/modals';

import { FadeInOut } from '../transitions';
import { Modal } from './modal';
import { ChangePasswordModal } from './change.password.modal';
import { ChangeEmailModal } from './change.email.modal';
import { FilmsFiltersModal } from './films.filters.modal';
import { CopyrightModal } from './copyright.modal';


const modalFactory = (modal) => {
  modal.key = modal.id;

  switch (modal.type) {
    case MODAL_CHANGE_PASSWORD:
      return <ChangePasswordModal className="modal--small" { ...modal } />;

    case MODAL_CHANGE_EMAIL:
      return <ChangeEmailModal className="modal--small" { ...modal } />;

    case MODAL_FILMS_FILTERS:
      return <FilmsFiltersModal className="modal--small" { ...modal } />;

    case MODAL_COPYRIGHT:
      return <CopyrightModal className="modal--small" { ...modal } />;

    default:
      return <Modal { ...modal } />;
  }
};

const _Modals = ({ modals }) => {
  const modalsClasses = classnames('modals', {
    'modals--active': modals.length > 0,
  });

  return (
    <TransitionGroup component="div" className={ modalsClasses } appear={ true }>
      { modals.map((modal) => {
        const component = modalFactory(modal);

        return <FadeInOut key={ modal.id } in={ true } timeout={ 200 }>{ component }</FadeInOut>;
      }) }
    </TransitionGroup>
  );
};

_Modals.propTypes = {
  modals: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  return {
    modals: state.modals.collection,
  };
};

const Modals = compose(
  connect(mapStateToProps),
)(_Modals);

export { Modals };
