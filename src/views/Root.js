import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/atoms/PrivateRoute/PrivateRoute';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import { fetchAllPosts, fetchUserPosts } from '../actions';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import PostPage from './PostPage';
import { AuthContext } from '../context/auth';
import useAuthUser from '../hooks/useAuthUser';

const Root = () => {
  const currentUser = useAuthUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchAllPosts());
      dispatch(fetchUserPosts(currentUser.uid));
    }
  }, [dispatch, currentUser]);

  return (
    <AuthContext.Provider value={currentUser}>
      <Router>
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
      </Router>
    </AuthContext.Provider>
  );
};

export default Root;
