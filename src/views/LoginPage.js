import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { googleAuth, fbAuth } from '../services/firebase';
import LoginPageTemplate from '../templates/LoginPageTemplate';
import LoginButton from '../components/atoms/ButtonLogin/ButtonLogin';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';

const StyledLoginButton = styled(LoginButton)`
  margin-bottom: 20px;
  width: 340px;

  @media (min-width: 768px) {
    width: 450px;
    margin-bottom: 40px;
  }
`;

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <LoginPageTemplate>
      <StyledLoginButton
        icon={facebook}
        onClick={async () => {
          await fbAuth();
          history.replace(from);
        }}
      >
        facebook
      </StyledLoginButton>
      <StyledLoginButton
        icon={google}
        onClick={async () => {
          await googleAuth();
          history.replace(from);
        }}
      >
        google
      </StyledLoginButton>
    </LoginPageTemplate>
  );
};

export default LoginPage;
