import React, { forwardRef } from 'react';
import * as C from './styles';

const Textarea = forwardRef(
  ({ placeholder, value, onChange, error, ...rest }, ref) => {
    return (
      <C.Container>
        <C.Textarea
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
        {error && <C.ErrorMsg>{error.message}</C.ErrorMsg>}
      </C.Container>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
