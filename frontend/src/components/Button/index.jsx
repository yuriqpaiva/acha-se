import React from 'react';
import * as C from './styles';

const Button = ({ children, onClick, as, fullWidth, ...rest }) => {
  return (
    <C.Button
      onClick={onClick}
      as={as || 'button'}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </C.Button>
  );
};

export default Button;
