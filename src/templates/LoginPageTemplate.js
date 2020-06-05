import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoBig from '../assets/logoBig.svg';
import logoSmall from '../assets/logoSmall.svg';
import Heading from '../components/atoms/Heading/Heading';
import footer from '../assets/homePageFooter.svg';

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

const StyledFooter = styled.footer`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const LoginPageTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <img src={logoSmall} alt="logo" />
        <img src={logoBig} alt="logo" />
      </StyledLogoWrapper>
      <InnerWrapper>
        <StyledHeading>Join us</StyledHeading>
        {children}
      </InnerWrapper>
      <StyledFooter>
        <img src={footer} alt="footer" />
      </StyledFooter>
    </StyledWrapper>
  );
};

LoginPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginPageTemplate;
