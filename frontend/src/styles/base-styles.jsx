import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    vertical-align: middle;
    margin-right: 6px;
  }
`;
