import {
  MODAL_CLOSE,
  MODAL_OPEN,
} from './modals.constants';

const modalClose = (id) => {
  return {
    type: MODAL_CLOSE,
    payload: {
      id,
    },
  };
};

const modalOpen = (type, params = {}) => {
  return {
    type: MODAL_OPEN,
    payload: {
      params,
      type,
    },
  };
};

// const modalOpenUserLoggedOutModal = () => modalOpen(MODAL_USER_LOGGED_OUT);

export {
  modalClose,
  modalOpen,
  // modalOpenUserLoggedOutModal,
};
