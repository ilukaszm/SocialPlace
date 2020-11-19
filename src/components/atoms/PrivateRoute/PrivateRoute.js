import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userId } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.string.isRequired,
};

export default PrivateRoute;
