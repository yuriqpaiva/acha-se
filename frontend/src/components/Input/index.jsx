import React, { forwardRef } from 'react';
import * as C from './styles';

const Input = forwardRef(
  ({ type, placeholder, value, onChange, ...rest }, ref) => {
    return (
      <C.Input
        ref={ref}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
