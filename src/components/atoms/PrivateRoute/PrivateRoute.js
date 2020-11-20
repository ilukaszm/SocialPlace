import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
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
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  location: null,
};

export default PrivateRoute;
