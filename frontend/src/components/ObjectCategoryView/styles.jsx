import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Galeria = styled.div`
  background-color: white;
  width: 100%;
  min-height: 800px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px;
  border-radius: 6px;

  @media (max-width: 920px) {
    min-height: 100%;
  }
`;
