import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import useAuthUser from '../hooks/useAuthUser';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import PostPage from './PostPage';

const Root = () => {
  const currentUser = useAuthUser();

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/login">
            {currentUser ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <PrivateRoute exact path="/">
            <UserPage />
          </PrivateRoute>
          <PrivateRoute exact path="/post/:id">
            <PostPage />
          </PrivateRoute>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
