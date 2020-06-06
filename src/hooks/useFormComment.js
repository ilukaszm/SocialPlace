import { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../services/firebase';
import { useAuthContext } from '../context/auth';
import { addComment } from '../actions';
import { firestoreAutoId } from '../utils/firestoreAuthId';

export default (id) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const currentUser = useAuthContext();
  const dispatch = useDispatch();

  const addNewComment = async ({ content }) => {
    const { uid, photoURL } = currentUser;

    const newPost = {
      comments: firebase.firestore.FieldValue.arrayUnion({
        commentId: firestoreAutoId(),
        avatarURL: photoURL,
        authorId: uid,
        createdDate: new Date(),
      }),
    };

    await db.collection('posts').doc(id).update(newPost);

    dispatch(addComment(id, photoURL, content));

    setFormVisible(false);
  };

  return [addNewComment, isFormVisible, setFormVisible];
};
