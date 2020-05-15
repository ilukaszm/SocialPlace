import React from 'react';
import styled from 'styled-components';
import LoginButton from '../components/atoms/LoginButton/LoginButton';
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import logoBig from '../assets/LogoBig.svg';
import logoSmall from '../assets/LogoSmall.svg';
import Heading from '../components/atoms/Heading/Heading';
import footer from '../assets/homepage_footer.svg';

const StyledWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: 80%;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.darkBlue};
  }
`;

const StyledLogoWrapper = styled.div`
  img:nth-child(2) {
    display: none;
  }

  @media (min-width: 1024px) {
    img:nth-child(1) {
      display: none;
    }
    img:nth-child(2) {
      display: block;
    }
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const StyledLoginButton = styled(LoginButton)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 450px;
    margin-bottom: 40px;
  }
`;

const StyledFooter = styled.footer`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const LoginPageTemplate = () => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <img src={logoSmall} alt="logo" />
        <img src={logoBig} alt="logo" />
      </StyledLogoWrapper>
      <InnerWrapper>
        <StyledHeading>Join us</StyledHeading>
        <StyledLoginButton icon={facebook}>facebook</StyledLoginButton>
        <StyledLoginButton icon={google}>google</StyledLoginButton>
      </InnerWrapper>
      <StyledFooter>
        <img src={footer} alt="footer" />
      </StyledFooter>
    </StyledWrapper>
  );
};

export default LoginPageTemplate;
