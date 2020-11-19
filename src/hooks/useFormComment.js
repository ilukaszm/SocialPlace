import { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthContext } from '../context/AuthContext';
import { addComment } from '../actions';
import { firestoreAutoId } from '../utils/firestoreAuthId';
import { selectProfile } from '../selectors';

export default (id) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();
  const { userId } = useAuthContext();
  const { avatarURL } = useSelector(selectProfile);

  const addNewComment = ({ content }) => {
    const newComment = {
      comments: firebase.firestore.FieldValue.arrayUnion({
        commentId: firestoreAutoId(),
        avatarURL,
        authorId: userId,
        content,
        createdAt: new Date(),
      }),
    };

    dispatch(addComment(id, newComment));

    setFormVisible(false);
  };

  return [addNewComment, isFormVisible, setFormVisible];
};
