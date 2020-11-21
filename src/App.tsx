import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactNotification from 'react-notifications-component';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>Carregando</h1>}>
        <ReactNotification />
        <GlobalStyle />
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
