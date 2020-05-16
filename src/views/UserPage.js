import React, { useState } from 'react';
import styled from 'styled-components';
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

const initialState = [
  {
    id: 1,
    avatarLink:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--V4IyAOhP--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/387228/d8244375-21b2-45c5-bfb0-c493fe787c66.jpeg',
    title: 'Schedule events for your first virtual channel',
    content:
      'You have already an instance of Consuo up and running and you replace <CHANNELMGR_IP> in this post with the IP-address to where your Consuo Schedule manager is running. For instructions on how to setup and install Consuo you can read the Quick Start guide.',
    plus: 10,
    minus: 2,
  },
];

const UserPage = () => {
  const [posts, setPosts] = useState([...initialState]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchPost, setSearchPost] = useState('');

  const addPost = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const content = e.target[1].value;

    const newPost = {
      // eslint-disable-next-line prefer-template
      id: '_' + Math.random().toString(36).substr(2, 9),
      avatarLink:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--V4IyAOhP--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/387228/d8244375-21b2-45c5-bfb0-c493fe787c66.jpeg',
      title,
      content,
      plus: 0,
      minus: 0,
    };

    setPosts([...posts, newPost]);
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
        .map(({ id, avatarLink, title, content, plus, minus }) => (
          <Post
            key={id}
            avatarLink={avatarLink}
            title={title}
            content={content}
            plus={plus}
            minus={minus}
          />
        ))}
      <Form visibility={isFormVisible} submitFn={addPost} />
      <StyledButtonIcon icon={plus} second onClick={() => setFormVisible(!isFormVisible)} />
    </UserPageTemplate>
  );
};

export default UserPage;
