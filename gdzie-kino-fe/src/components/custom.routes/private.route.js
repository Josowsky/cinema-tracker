import React from 'react';
import { node, string } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const _PrivateRoute = ({ component: Component, location, token, ...rest }) => (
  <Route {...rest} render={ (props) => (
    token
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />
  )} />
);

_PrivateRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
  token: string,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);

export { PrivateRoute };
