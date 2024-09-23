import React, { forwardRef } from 'react';
import * as C from './styles';

const Input = forwardRef(
  ({ type, placeholder, value, onChange, error, ...rest }, ref) => {
    return (
      <C.Container>
        <C.Input
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {error && <C.ErrorMsg>{error.message}</C.ErrorMsg>}
      </C.Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
