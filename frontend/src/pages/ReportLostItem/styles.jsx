import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;

  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Form = styled.form`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
