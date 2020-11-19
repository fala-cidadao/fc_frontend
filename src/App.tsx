import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>Carregando</h1>}>
        <GlobalStyle />
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
