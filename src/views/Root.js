import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={UserPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
