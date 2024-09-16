import React from 'react';
import * as C from './styles';
import { CaretUpDown } from '@phosphor-icons/react';

const Select = ({ value, onChange, options, placeholder, ...rest }) => {
  return (
    <C.SelectWrapper>
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
      <CaretUpDown size={20} />
    </C.SelectWrapper>
  );
};

export default Select;
