import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  padding: 12px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.zinc[50]};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.zinc[200]};
  color: ${({ theme }) => theme.colors.zinc[700]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc[500]};
  }
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &[type='datetime-local'] {
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  @supports (-webkit-touch-callout: none) {
    &:before {
      color: ${({ theme }) => theme.colors.zinc[500]};
      content: attr(placeholder) !important;
      font-size: 14px;
    }

    &[value]:not([value='']) + &:before {
      content: '' !important;
    }
  }
`;
