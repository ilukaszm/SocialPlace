import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../actions';
import { selectProfile } from '../selectors';
import { useAuthContext } from '../context/AuthContext';

export default () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useAuthContext();
  const { avatarURL } = useSelector(selectProfile);

  const addNewPost = ({ title, content }) => {
    const newPost = {
      title,
      content,
      avatarURL,
      plus: 0,
      minus: 0,
      authorId: userId,
      usersVotedId: [],
      comments: [],
      createdAt: new Date(),
    };

    dispatch(addPost(newPost));

    setFormVisible(false);
  };

  return [addNewPost, isFormVisible, setFormVisible];
};
