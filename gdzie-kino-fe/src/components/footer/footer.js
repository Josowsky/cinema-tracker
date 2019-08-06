import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { NO_FOOTER_ROUTES } from './footer.constants';

const _Footer = ({ location }) => {
  const { pathname } = location;

  if (NO_FOOTER_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <div className="footer d-flex align-items-center">
      <Link to="/" className={ `footer__box ${ pathname === '/' ? 'footer__box--selected' : '' }` }>
        <i className="fas fa-home footer__box-icon" />
        <p className="footer__box-title">Filmy</p>
      </Link>
      <Link to="/konto" className={ `footer__box ${ pathname === '/konto' ? 'footer__box--selected' : '' }` }>
        <i className="fas fa-user footer__box-icon" />
        <p className="footer__box-title">Konto</p>
      </Link>
      <Link to="/kina" className={ `footer__box ${ pathname === '/kina' ? 'footer__box--selected' : '' }` }>
        <i className="fas fa-video footer__box-icon" />
        <p className="footer__box-title">Kina</p>
      </Link>
      <Link to="/ulubione" className={ `footer__box ${ pathname === '/ulubione' ? 'footer__box--selected' : '' }` }>
        <i className="fas fa-heart footer__box-icon" />
        <p className="footer__box-title">Ulubione</p>
      </Link>
    </div>
  );
};

_Footer.propTypes = {
  location: PropTypes.object.isRequired,
};

const Footer = withRouter(_Footer);

export { Footer };
