// import { combineEpics } from 'redux-observable';
// import { takeUntil } from 'rxjs/operator/takeUntil';
// import { mergeMap } from 'rxjs/operator/mergeMap';
// import { map } from 'rxjs/operator/map';
// import { _catch } from 'rxjs/operator/catch';

// import { ajax } from 'utils/ajax';

// import {
//   authLoginError,
//   authLoginSuccess,
//   authRegisterError,
//   authRegisterSuccess,
// } from './auth.actions';
// import {
//   AUTH_LOGIN,
//   AUTH_LOGIN_CANCELLED,
//   AUTH_REGISTER,
//   AUTH_REGISTER_CANCELLED,
// } from './auth.constants';

// const loginEpic = (action$) => {
//   return action$.ofType(AUTH_LOGIN)
//     ::mergeMap(({ payload }) => {
//       const { password, email } = payload;

//       return ajax({
//         method: 'POST',
//         url: `/api/login`,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'same-origin',
//         body: {
//           password,
//           username: email,
//         },
//       })
//         ::map(({ token, id }) => {
//           window.location.href = '/';
//           return authLoginSuccess({ token, id });
//         })
//         ::_catch((error) => authLoginError(error.message || error))
//         ::takeUntil(action$.ofType(AUTH_LOGIN_CANCELLED));
//     });
// };

// const registerEpic = (action$) => {
//   return action$.ofType(AUTH_REGISTER)
//     ::mergeMap(({ payload }) =>
//       ajax({
//         method: 'POST',
//         url: `/api/register`,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'same-origin',
//         body: {
//           email: payload.email,
//           password: payload.password,
//         },
//       })
//         ::map(() => {
//           window.location.href = '/logowanie';
//           return authRegisterSuccess();
//         })
//         ::_catch((error) => authRegisterError(error.message || error))
//         ::takeUntil(action$.ofType(AUTH_REGISTER_CANCELLED))
//     );
// };

// const authEpic = combineEpics(
//   loginEpic,
//   registerEpic,
// );

// export { authEpic };
