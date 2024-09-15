import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  gap: 8px;
`;
