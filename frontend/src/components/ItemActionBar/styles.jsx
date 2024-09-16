import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  a {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    padding: 6px;
    border-radius: 6px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};

    &:hover {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
