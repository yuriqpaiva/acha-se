import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  height: full;
  width: full;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.form`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #104a8b;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #104a8b;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #104a8b;
  }
`;
