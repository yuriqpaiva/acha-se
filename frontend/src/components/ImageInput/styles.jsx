import styled from 'styled-components';

export const Container = styled.div`
  grid-column: span 2;
  padding-bottom: 12px;
  padding-bottom: 32px;

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
