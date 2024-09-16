import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { WindowProvider } from './contexts/window';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <WindowProvider>
        <RoutesApp />
      </WindowProvider>
      <GlobalStyle />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
