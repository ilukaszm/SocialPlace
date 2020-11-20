import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useFormPost from '../hooks/useFormPost';
import UserPageTemplate from '../templates/UserPageTemplate';
import Post from '../components/molecules/Post/Post';
import Input from '../components/atoms/Input/Input';
import Form from '../components/molecules/Form/Form';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Button from '../components/atoms/Button/Button';
import plus from '../assets/icons/plus.svg';
import { fetchAllPosts, fetchUserPosts } from '../actions';
import { useAuthContext } from '../context/AuthContext';

const StyledInput = styled(Input)`
  width: 80vw;
  margin: 0 auto 20px;

  @media (min-width: 1024px) {
    width: 45vw;
  }
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

const StyledButton = styled(Button)`
  margin: 20px auto;
`;

const UserPage = () => {
  const pathname = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const { userId } = useAuthContext();

  const pageType = pathname || 'hottestposts';

  const posts = useSelector((state) => state.posts[pageType]);
  const [searchPost, setSearchPost] = useState('');
  const [addNewPost, isFormVisible, setFormVisible] = useFormPost();

  return (
    <UserPageTemplate>
      <StyledInput
        placeholder="Search post"
        search
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
      />
      {posts
        .filter(({ title }) => title.toLowerCase().includes(searchPost.toLowerCase()))
        .map(({ id, ...post }) => (
          <Post key={id} id={id} {...post} />
        ))}
      <Form isVisibility={isFormVisible} submitFn={addNewPost} />
      <StyledButtonIcon icon={plus} second onClick={() => setFormVisible(!isFormVisible)} />
      <StyledButton
        type="button"
        onClick={() => {
          if (pageType === 'userposts') {
            dispatch(fetchUserPosts(userId));
          } else {
            dispatch(fetchAllPosts(userId));
          }
        }}
      >
        load more
      </StyledButton>
    </UserPageTemplate>
  );
};

export default UserPage;
