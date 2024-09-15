import { CaretLeft } from '@phosphor-icons/react';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

export function BackButton({ marginBottom = 0 }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Styled.Container style={{ marginBottom }} onClick={handleBack}>
      <div>
        <CaretLeft size={24} />
      </div>
      Voltar
    </Styled.Container>
  );
}
