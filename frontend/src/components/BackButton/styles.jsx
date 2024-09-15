import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  max-width: fit-content;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > div {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
    background-color: white;
  }
`;
