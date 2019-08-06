import React from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { authRegister } from 'store/auth';
import { isEmail } from "../../utils/validators";
import { Logo } from "../logo";
import { MaterialInput } from "../material.input";
const authRegister = () => ({ type: 'olden' });

class _RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordAgain: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const { email, password } = this.state;
    const { registerUser } = this.props;

    registerUser(email, password);
  }

  render() {
    const { email, password, passwordAgain } = this.state;
    const { error } = this.props;

    const isEmailInvalid = email !== "" && !isEmail(email);
    const isPasswordAgainInvalid =
      passwordAgain !== "" && password !== passwordAgain;

    const buttonEnabled =
      email &&
      password &&
      passwordAgain &&
      (!isEmailInvalid && !isPasswordAgainInvalid);

    return (
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="login-page__box">
          <div className="login-page__logo d-flex justify-content-center align-items-center">
            <Logo />
          </div>
          <div className="login-page__error">
            {error && (
              <i className="login-page__error-icon fas fa-exclamation-triangle" />
            )}
            {error}
          </div>
          <div className="login-page__inputs">
            <MaterialInput
              type={"email"}
              invalid={isEmailInvalid}
              className="login-page__input"
              name="email"
              label="Email"
              onChange={event =>
                this.handleInputChange("email", event.target.value)
              }
              value={email}
            />
            <MaterialInput
              type={"password"}
              className="login-page__input"
              name="password"
              label="Hasło"
              onChange={event =>
                this.handleInputChange("password", event.target.value)
              }
              value={password}
            />
            <MaterialInput
              type={"password"}
              invalid={isPasswordAgainInvalid}
              className="login-page__input"
              name="passwordAgain"
              label="Hasło ponownie"
              onChange={event =>
                this.handleInputChange("passwordAgain", event.target.value)
              }
              value={passwordAgain}
            />
          </div>
          <button
            disabled={!buttonEnabled}
            onClick={this.handleSubmit}
            className="login-page__submit d-flex justify-content-center align-items-center"
          >
            Rejestracja
          </button>
          <div className="login-page__register-title">Masz już konto?</div>
          <Link to="/logowanie">
            <div role="button" className="login-page__register-link">
              Logowanie
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

_RegisterPage.propTypes = {
  error: string,
  registerUser: func.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error
});
const mapDispatchToProps = dispatch => ({
  registerUser: (email, password) => dispatch(authRegister(email, password))
});

const RegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_RegisterPage);

export { RegisterPage };
