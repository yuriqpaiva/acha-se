import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Input = styled.select`
  outline: none;
  padding: 12px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  appearance: none;

  background-color: ${({ theme }) => theme.colors.zinc[50]};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.zinc[200]};
  color: ${({ theme }) => theme.colors.zinc[700]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc[500]};
  }
  border: none;
`;
