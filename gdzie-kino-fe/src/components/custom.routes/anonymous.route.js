import React from 'react';
import { func, node, oneOfType } from 'prop-types';
import get from 'lodash.get';
import { Route, Redirect } from 'react-router-dom';

/**
 * Redirect to main page if user is logged in
 * Display given component if user is not logged in
 */
const AnonymousRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('persist:gk-auth'));

  return (
    <Route {...rest} render={ (props) => (
      get(user, 'token', null) === 'null'
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />
    )} />
  );
};

AnonymousRoute.propTypes = {
  component: oneOfType([
    func,
    node,
  ]).isRequired,
};

export { AnonymousRoute };
