import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 24px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  border-radius: 6px;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
