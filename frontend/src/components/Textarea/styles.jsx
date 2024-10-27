import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  outline: none;
  padding: 12px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;

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
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 14px;
  padding-top: 6px;
  color: ${({ theme }) => theme.colors.danger};
`;
