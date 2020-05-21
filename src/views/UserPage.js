import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../actions';
import UserPageTemplate from '../templates/UserPageTemplate';
import Post from '../components/molecules/Post/Post';
import Input from '../components/atoms/Input/Input';
import Form from '../components/molecules/Form/Form';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import plus from '../assets/icons/plus.svg';

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

const UserPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchPost, setSearchPost] = useState('');

  const posts = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const addNewPost = ({ title, content }) => {
    const { id, avatarURL } = currentUser;

    dispatch(addPost(id, avatarURL, title, content));
    setFormVisible(false);
  };

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
        .map(({ id, avatarURL, title, content, plus, minus }) => (
          <Post
            key={id}
            id={id}
            avatarURL={avatarURL}
            title={title}
            content={content}
            plus={plus}
            minus={minus}
          />
        ))}
      <Form visibility={isFormVisible} submitFn={addNewPost} />
      <StyledButtonIcon icon={plus} second onClick={() => setFormVisible(!isFormVisible)} />
    </UserPageTemplate>
  );
};

export default UserPage;
