import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Post from '../components/molecules/Post/Post';
import Comment from '../components/molecules/Comment/Comment';

const PostPage = () => {
  return (
    <UserPageTemplate>
      <Post />
      <Comment />
      <Comment />
      <Comment />
    </UserPageTemplate>
  );
};

export default PostPage;
