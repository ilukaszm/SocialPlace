import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '../components/organisms/NavBar/NavBar';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import plus from '../assets/icons/plus.svg';

const UserPageTemplateWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background-size: 50%;
  z-index: 9999;

  :hover {
    background-color: ${({ theme }) => theme.darkRed};
  }

  @media (min-width: 768px) {
    bottom: 30px;
    right: 30px;
    width: 62px;
    height: 62px;
  }
`;

const UserPageTemplate = ({ children }) => {
  return (
    <UserPageTemplateWrapper>
      <NavBar />
      {children}
      <StyledButtonIcon icon={plus} second />
    </UserPageTemplateWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
