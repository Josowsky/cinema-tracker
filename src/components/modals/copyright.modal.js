import React from "react";
import cx from "classnames";
import { func, string } from "prop-types";
import { connect } from "react-redux";

// import { modalClose as modalCloseAction } from 'store/modals';
const modalCloseAction = () => ({ type: 'olden' });

const _CopyrightModal = ({ id, modalClose, modalClasses = "" }) => (
  <div className="modal__container">
    <div className="modal__overlay" onClick={() => modalClose(id)} />
    <div className={cx("modal", modalClasses)}>
      <div className="modal__close" onClick={() => modalClose(id)}>
        <i className="fa fa-times" aria-hidden="true" />
      </div>
      <div className="copyright-modal">
        <div className="copyright-modal__title">Prawa autorskie</div>
        <div className="copyright-modal__text">
          Wszelkie informacje na temat filmów (w tym. tytuły, gatunki, plakaty,
          czas trwania oraz oceny) pochodzą z serwisu Filmweb. Serwis Filmweb
          posiada prawa autorskie do wszystkich treści prezentowanych w serwisie
          gdziekino.pl
        </div>
      </div>
    </div>
  </div>
);

_CopyrightModal.propTypes = {
  id: string.isRequired,
  modalClose: func.isRequired,
  modalClasses: string
};

const CopyrightModal = connect(
  null,
  dispatch => ({
    modalClose: id => dispatch(modalCloseAction(id))
  })
)(_CopyrightModal);

export { CopyrightModal };
