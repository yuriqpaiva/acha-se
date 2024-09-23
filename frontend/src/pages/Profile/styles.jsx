import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Galeria = styled.div`
  background-color: white;
  right: 250px;
  top: 250px;
  text-align: left;
  border-radius: 10px;
  padding: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const SubmitButton = styled(Button)`
  grid-column: span 2;

  @media (max-width: 920px) {
    grid-column: span 1;
  }
`;
