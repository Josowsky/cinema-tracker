import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InlineLoading = ({ className }) => {
  return (
    <div>
      <i className={ classnames('fas fa-circle-notch fa-spin', className) } aria-hidden="true" />
    </div>
  );
};

InlineLoading.propTypes = {
  className: PropTypes.string,
};

InlineLoading.defaultProps = {
  className: '',
};

export { InlineLoading };
