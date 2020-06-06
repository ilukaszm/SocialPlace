import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions';
import { db } from '../services/firebase';
import { useAuthContext } from '../context/auth';

export default () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const currentUser = useAuthContext();
  const dispatch = useDispatch();

  const addNewPost = async ({ title, content }) => {
    const { uid, photoURL } = currentUser;
    const newPost = {
      title,
      content,
      avatarURL: photoURL,
      plus: 0,
      minus: 0,
      authorId: uid,
      usersVotedId: [],
      comments: [],
      createdDate: new Date(),
    };

    const res = await db.collection('posts').add(newPost);

    if (res.id) {
      dispatch(addPost(newPost));
    } else {
      throw new Error('Oops! We have some error! ');
    }

    setFormVisible(false);
  };

  return [addNewPost, isFormVisible, setFormVisible];
};
