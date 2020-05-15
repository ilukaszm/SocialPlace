import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/organisms/NavBar/NavBar';
import Post from '../components/molecules/Post/Post';

const UserPageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const UserPage = () => {
  return (
    <UserPageWrapper>
      <NavBar />
      <Post />
      <Post />
      <Post />
      <Post />
    </UserPageWrapper>
  );
};

export default UserPage;
