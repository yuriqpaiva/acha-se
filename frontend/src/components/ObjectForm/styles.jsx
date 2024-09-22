import styled from 'styled-components';

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

export const ButtonImageWrapper = styled.div`
  grid-column: span 2;
  padding-bottom: 12px;

  @media (max-width: 920px) {
    grid-column: span 1;
  }

  display: flex;
  justify-content: center;

  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 200px;

    img {
      height: 100px;
      width: 100px;
      border-radius: 6px;
      object-fit: cover;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};
    }

    .remove-image {
      font-weight: 500;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      gap: 8px;
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`;

export const BotaoImagem = styled.button`
  border: 1px dashed ${({ theme }) => theme.colors.primary};
  height: 200px;
  width: 200px;
  color: ${({ theme }) => theme.colors.text};
  padding: 32px;
  border-radius: 6px;
`;

export const SubmitButtonWrapper = styled.div`
  grid-column: span 2;

  @media (max-width: 920px) {
    grid-column: span 1;
  }
`;
