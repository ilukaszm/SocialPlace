import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useFormPost from '../hooks/useFormPost';
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
  const pathname = useLocation().pathname.slice(1);
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
