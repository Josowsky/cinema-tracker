import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { HeaderMobile } from './header.mobile';
import { HeaderDesktop } from './header.desktop';

import { NO_HEADER_ROUTES } from './header.constants';


const _Header = ({ isMobile, location }) => {
  const { pathname } = location;

  if (NO_HEADER_ROUTES.includes(pathname)) {
    return null;
  }

  return isMobile
    ? <HeaderMobile />
    : <HeaderDesktop />;
};

_Header.propTypes = {
  isMobile: bool.isRequired,
  location: object.isRequired,
};

const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
});

const Header = compose(
  withRouter,
  connect(mapStateToProps),
)(_Header);

export { Header };
