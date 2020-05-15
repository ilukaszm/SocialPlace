import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import LoginPage from './LoginPage';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/" component={LoginPage} />
      </ThemeProvider>
    </Router>
  );
};

export default Root;
