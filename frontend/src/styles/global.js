import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: "Nunito", sans-serif !important;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: "Nunito", sans-serif !important;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }

  input {
    font-family: "Nunito", sans-serif !important;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
