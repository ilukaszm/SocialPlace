import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import PostPage from './PostPage';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={UserPage} />
          <Route path="/home/post/:id" component={PostPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
