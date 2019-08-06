import React from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { authLogin } from 'store/auth';
import { isEmail } from "../../utils/validators";
import { Logo } from "../logo";
import { MaterialInput } from "../material.input";
const authLogin = () => ({ type: 'olden' });

class _LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
    const { loginUser } = this.props;

    loginUser(email, password);
  }

  render() {
    const { email, password } = this.state;
    const { error } = this.props;

    const isEmailInvalid = email !== "" && !isEmail(email);

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
          </div>
          <button
            disabled={!email || !password || isEmailInvalid}
            onClick={this.handleSubmit}
            className="login-page__submit d-flex justify-content-center align-items-center"
          >
            Logowanie
          </button>
          <div className="login-page__register-title">
            Nie masz jeszcze konta?
          </div>
          <Link to="/rejestracja">
            <div role="button" className="login-page__register-link">
              Rejestracja
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

_LoginPage.propTypes = {
  error: string,
  loginUser: func.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error
});
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(authLogin(email, password))
});

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LoginPage);

export { LoginPage };
