import React, { forwardRef } from 'react';
import * as C from './styles';
import { CaretUpDown } from '@phosphor-icons/react';

/**
 * Select component with forwarded ref
 * @typedef {Object} SelectProps
 * @property {string} [value] - Current value of the select
 * @property {function} [onChange] - Change handler
 * @property {Array<{value: string, label: string}>} options - Array of options
 * @property {string} [placeholder] - Placeholder text
 * @property {Object} [error] - Error object from form validation
 */

const Select = forwardRef(
  /**
   * @param {SelectProps} props - Component props
   * @param {React.Ref} ref - Forwarded ref
   * @returns {JSX.Element}
   */
  ({ value, onChange, options, placeholder, error, ...rest }, ref) => {
    return (
      <C.SelectWrapper>
        <C.Input
          as="select"
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </C.Input>
        <CaretUpDown size={20} />
        {error && <C.ErrorMsg>{error.message}</C.ErrorMsg>}
      </C.SelectWrapper>
    );
  },
);

// Add display name for better debugging
Select.displayName = 'Select';

export default Select;
