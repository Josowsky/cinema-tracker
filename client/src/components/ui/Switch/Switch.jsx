import React from "react";
import { arrayOf, func, string, shape, node, oneOfType } from "prop-types";

import { StyledContainer, StyledOption } from "./Switch.style";

const Switch = ({ name, options, onChange, value }) => {
  const handleOptionSelect = value => () => onChange(name, value);

  return (
    <StyledContainer>
      {options &&
        options.map(option => (
          <StyledOption
            tabIndex="1"
            onClick={handleOptionSelect(option.value)}
            isSelected={option.value === value}
            key={option.label}
          >
            {option.label}
          </StyledOption>
        ))}
    </StyledContainer>
  );
};

Switch.propTypes = {
  name: string.isRequired,
  options: arrayOf(
    shape({
      value: string,
      label: oneOfType([string, node, func])
    })
  ).isRequired,
  onChange: func.isRequired,
  value: string.isRequired
};

export { Switch };
