import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { WindowProvider } from './contexts/window';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { Toaster } from 'react-hot-toast';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <WindowProvider>
          <RoutesApp />
        </WindowProvider>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
    <Toaster
      containerStyle={{
        zIndex: 999999999999999,
      }}
    />
  </QueryClientProvider>
);

export default App;
