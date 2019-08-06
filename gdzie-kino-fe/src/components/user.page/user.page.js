import React from "react";
import { bool, func, node, string } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { authLogout } from 'store/auth';
import { modalOpen, MODAL_COPYRIGHT } from "../../store/modals";
const authLogout = () => ({ type: 'olden' });

const UserPageButton = ({ callback, icon, text }) => (
  <div className="user-page__button-section d-flex justify-content-center align-items-center">
    <div className="user-page__button-icon d-flex justify-content-center align-items-center">
      {icon}
    </div>
    <div
      onClick={callback}
      className="user-page__button-text d-flex justify-content-center align-items-center"
    >
      {text}
    </div>
  </div>
);

UserPageButton.propTypes = {
  callback: func.isRequired,
  icon: node.isRequired,
  text: string.isRequired
};

const _UserPage = ({ authLogout, isLogged, openCopyrightlModal }) => (
  <div className="user-page">
    <UserPageButton
      key="copyright"
      callback={openCopyrightlModal}
      icon={<i className="fas fa-copyright" />}
      text="Prawa autorskie"
    />
    {isLogged ? (
      <div
        onClick={() => authLogout()}
        className="user-page__logout-button d-flex justify-content-center align-items-center"
      >
        Wyloguj
      </div>
    ) : (
      <Link to="/logowanie">
        <div className="user-page__logout-button d-flex justify-content-center align-items-center">
          Zaloguj się
        </div>
      </Link>
    )}
  </div>
);

_UserPage.propTypes = {
  isLogged: bool.isRequired,
  authLogout: func.isRequired,
  openCopyrightlModal: func.isRequired
};

const mapStateToProps = state => {
  return {
    isLogged: Boolean(state.auth.token)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogout: () => dispatch(authLogout()),
    openCopyrightlModal: () => dispatch(modalOpen(MODAL_COPYRIGHT))
  };
};

const UserPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_UserPage);

export { UserPage };
