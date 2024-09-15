import React from 'react';
import * as C from './styles';
import { CircleNotch } from '@phosphor-icons/react';

const Button = ({
  children,
  onClick,
  as,
  fullWidth,
  loading = false,
  ...rest
}) => {
  return (
    <C.Button
      loading={loading}
      disabled={rest.disabled || loading}
      onClick={onClick}
      as={as || 'button'}
      fullWidth={fullWidth}
      {...rest}
    >
      {loading ? <CircleNotch size={24} /> : children}
    </C.Button>
  );
};

export default Button;
