import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useAuthUser from '../hooks/useAuthUser';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const currentUser = useAuthUser();

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
