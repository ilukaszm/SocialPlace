import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../templates/UserPageTemplate';
import Post from '../components/molecules/Post/Post';
import Input from '../components/atoms/Input/Input';

const StyledInput = styled(Input)`
  width: 80vw;
  margin: 0 auto 20px;

  @media (min-width: 1024px) {
    width: 45vw;
  }
`;

const UserPage = () => {
  return (
    <UserPageTemplate>
      <StyledInput placeholder="Search post" search />
      <Post />
      <Post />
      <Post />
      <Post />
    </UserPageTemplate>
  );
};

export default UserPage;
