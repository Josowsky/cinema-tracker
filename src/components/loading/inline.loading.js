import React from "react";
import PropTypes from "prop-types";
import { FaCircleNotch } from "react-icons/fa";

const InlineLoading = ({ className = "" }) => {
  return (
    <div>
      <FaCircleNotch className={className} />
    </div>
  );
};

InlineLoading.propTypes = {
  className: PropTypes.string
};

export { InlineLoading };
