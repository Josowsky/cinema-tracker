import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <div className="logo" />
  </Link>
);

Logo.propTypes = {
  width: string,
};

export { Logo };
