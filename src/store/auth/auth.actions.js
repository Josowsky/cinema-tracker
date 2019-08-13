import {
  AUTH_LOGIN,
  AUTH_LOGIN_CANCELLED,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_REGISTER_CANCELLED,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESS,
} from './auth.constants';
import { simpleActionCreator } from '../action.creators';

const authLogin = (email, password) => ({
  type: AUTH_LOGIN,
  payload: {
    password,
    email,
  },
});

const authLoginCancelled = simpleActionCreator(AUTH_LOGIN_CANCELLED);

const authLoginError = (error) => ({
  type: AUTH_LOGIN_ERROR,
  payload: {
    error,
  },
});

const authLoginSuccess = ({ token, id }) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    token,
    id,
  },
});

const authLogout = simpleActionCreator(AUTH_LOGOUT);

const authRegister = (email, password) => ({
  type: AUTH_REGISTER,
  payload: {
    email,
    password,
  },
});

const authRegisterCancelled = simpleActionCreator(AUTH_REGISTER_CANCELLED);

const authRegisterError = (error) => ({
  type: AUTH_REGISTER_ERROR,
  payload: {
    error,
  },
});

const authRegisterSuccess = simpleActionCreator(AUTH_REGISTER_SUCCESS);

export {
  authLogin,
  authLoginCancelled,
  authLoginError,
  authLoginSuccess,
  authLogout,
  authRegister,
  authRegisterCancelled,
  authRegisterError,
  authRegisterSuccess,
};
