import React from 'react';
import styled from 'styled-components';
import { googleAuth, fbAuth } from '../services/firebase';
import LoginPageTemplate from '../templates/LoginPageTemplate';
import LoginButton from '../components/atoms/ButtonLogin/ButtonLogin';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';

const StyledLoginButton = styled(LoginButton)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 450px;
    margin-bottom: 40px;
  }
`;

const LoginPage = () => (
  <>
    <LoginPageTemplate>
      <StyledLoginButton
        icon={facebook}
        onClick={() => {
          fbAuth();
        }}
      >
        facebook
      </StyledLoginButton>
      <StyledLoginButton
        icon={google}
        onClick={() => {
          googleAuth();
        }}
      >
        google
      </StyledLoginButton>
    </LoginPageTemplate>
  </>
);

export default LoginPage;
