import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/atoms/PrivateRoute/PrivateRoute';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import { fetchAllPosts, fetchUserPosts, fetchUserProfile } from '../actions';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import PostPage from './PostPage';
import useAuthUser from '../hooks/useAuthUser';
import { AuthProvider } from '../context/AuthContext';

const Root = () => {
  const { userId } = useAuthUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProfile(userId));
      dispatch(fetchAllPosts());
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, userId]);

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={UserPage} />
            <PrivateRoute exact path="/allposts" component={UserPage} />
            <PrivateRoute exact path="/userposts" component={UserPage} />
            <PrivateRoute exact path="/post/:id" component={PostPage} />
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default Root;
