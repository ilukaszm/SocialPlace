import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthContext } from '../context/AuthContext';
import { addComment } from '../actions';
import { selectProfile } from '../selectors';

export default (id) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();
  const { userId } = useAuthContext();
  const { avatarURL, email } = useSelector(selectProfile);

  const addNewComment = ({ description }) => {
    const newComment = {
      postId: id,
      authorId: userId,
      email,
      avatarURL,
      description,
      createdAt: new Date(),
    };

    dispatch(addComment(newComment));

    setFormVisible(false);
  };

  return [addNewComment, isFormVisible, setFormVisible];
};
