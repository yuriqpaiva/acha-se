import React from 'react';
import * as C from './styles';

const Select = ({ value, onChange, options, placeholder, ...rest }) => {
  return (
    <C.Input as="select" value={value} onChange={onChange} {...rest}>
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </C.Input>
  );
};

export default Select;
