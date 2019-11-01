import React from 'react';

import { StyledContainer, StyledOption } from './Switch.style';

type Option<T> = {
  value: T;
  label: string;
};

interface SwitchProps<T> {
  name: string;
  options: Option<T>[];
  onChange: (optionLabel: string, optionValue: T) => void;
  value: T | null;
}

function Switch<T>({ name, options, onChange, value }: SwitchProps<T>) {
  const handleOptionSelect = (value: SwitchProps<T>['value']) => () => onChange(name, value!);

  return (
    <StyledContainer>
      {options &&
        options.map(option => (
          <StyledOption
            tabIndex={1}
            onClick={handleOptionSelect(option.value)}
            isSelected={option.value === value}
            key={option.label}
          >
            {option.label}
          </StyledOption>
        ))}
    </StyledContainer>
  );
}

export { Switch };
