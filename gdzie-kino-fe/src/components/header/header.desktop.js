import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { SEARCH_VISIBLE_ROUTES } from './header.constants';
import { HeaderSearchDesktop } from '../header.search';
import { Logo } from '../logo';


const _HeaderDesktop = ({ location }) => {
  const { pathname } = location;
  const isSearchAvailable = SEARCH_VISIBLE_ROUTES.includes(pathname);

  return (
    <div className="header-desktop">
      <div className="header-desktop__wrapper d-flex align-items-center">
        <div className="header-desktop__logo-box d-flex align-items-center justify-content-center">
          <Logo />
        </div>

        <div className="header-desktop__separator"></div>

        <div className="header-desktop__search-box d-flex justify-content-center align-items-center">
          {
            isSearchAvailable && (
              <div className="header-desktop__search-input-container">
                <HeaderSearchDesktop />
              </div>
            )
          }
        </div>

        <div className="header-desktop__right-panel d-flex align-items-center justify-content-between">
          <Link to="/konto">
            <i className="fas fa-user" />
          </Link>
          <div className="header-desktop__separator"></div>
          <Link to="/kina">
            <i className="fas fa-video" />
          </Link>
          <Link to="/ulubione">
            <i className="fas fa-heart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

_HeaderDesktop.propTypes = {
  location: object.isRequired,
};

const HeaderDesktop = withRouter(_HeaderDesktop);

export { HeaderDesktop };
