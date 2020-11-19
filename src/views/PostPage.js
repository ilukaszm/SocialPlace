import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFormComment from '../hooks/useFormComment';
import UserPageTemplate from '../templates/UserPageTemplate';
import Post from '../components/molecules/Post/Post';
import Comment from '../components/molecules/Comment/Comment';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Form from '../components/molecules/Form/Form';
import plus from '../assets/icons/plus.svg';

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

const PostPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.allposts.find((post) => post.id === id));

  const [addNewComment, isFormVisible, setFormVisible] = useFormComment(id);

  if (post) {
    return (
      <UserPageTemplate>
        <Post {...post} />
        {post.comments.map((comment) => (
          <Comment {...comment} />
        ))}
        <StyledButtonIcon icon={plus} second onClick={() => setFormVisible(!isFormVisible)} />
        <Form comment visibility={isFormVisible} submitFn={addNewComment} />
      </UserPageTemplate>
    );
  }
  return <UserPageTemplate />;
};

export default PostPage;
