import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../actions';
import { selectProfile } from '../selectors';
import { useAuthContext } from '../context/AuthContext';

export default () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useAuthContext();
  const { avatarURL, email } = useSelector(selectProfile);

  const addNewPost = ({ subject, description }) => {
    const newPost = {
      subject,
      description,
      email,
      avatarURL,
      plus: 0,
      minus: 0,
      authorId: userId,
      votersId: [],
      createdAt: new Date(),
    };

    dispatch(addPost(newPost));

    setFormVisible(false);
  };

  return [addNewPost, isFormVisible, setFormVisible];
};
