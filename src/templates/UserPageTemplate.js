import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '../components/organisms/NavBar/NavBar';

const UserPageTemplateWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const UserPageTemplate = ({ children }) => {
  return (
    <UserPageTemplateWrapper>
      <NavBar />
      {children}
    </UserPageTemplateWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
