import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../services/firebase';

import {
  FETCH_USER_POSTS_RESPOND,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_ALL_POSTS_RESPOND,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
  ADD_POST,
  ADD_COMMENT,
  ADD_PLUS_RESPOND,
  ADD_PLUS_SUCCESS,
  ADD_PLUS_FAILURE,
  ADD_MINUS_RESPOND,
  ADD_MINUS_SUCCESS,
  ADD_MINUS_FAILURE,
  SET_USER_IS_SIGNED_IN,
  SET_USER_IS_SIGNED_OUT,
} from './types';

export const login = (payload) => ({
  type: SET_USER_IS_SIGNED_IN,
  payload,
});
export const logout = () => ({
  type: SET_USER_IS_SIGNED_OUT,
});

export const fetchUserPosts = (id) => async (dispatch) => {
  dispatch({ type: FETCH_USER_POSTS_RESPOND });
  const tmp = [];

  const result = await db
    .collection('posts')
    .where('authorId', '==', id)
    .orderBy('createdDate')
    .get();

  if (result) {
    result.docs.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: tmp });
  } else {
    dispatch({ type: FETCH_USER_POSTS_FAILURE });
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS_RESPOND });
  const tmp = [];

  const result = await db.collection('posts').orderBy('createdDate').get();

  if (result) {
    result.docs.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: tmp });
  } else {
    dispatch({ type: FETCH_ALL_POSTS_FAILURE });
  }
};

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const addComment = (id, avatarURL, content) => ({
  type: ADD_COMMENT,
  payload: { id, avatarURL, content },
});

export const addPlus = (id, authorId, plus) => (dispatch, getState) => {
  dispatch({ type: ADD_PLUS_RESPOND });

  const isUserVoted = getState()
    .posts.allposts.find((post) => post.id === id)
    .usersVotedId.includes(authorId);

  if (isUserVoted) return dispatch({ type: ADD_PLUS_FAILURE });

  const newData = {
    plus: plus + 1,
    usersVotedId: firebase.firestore.FieldValue.arrayUnion(`${authorId}`),
  };

  db.collection('posts')
    .doc(`${id}`)
    .update(newData)
    .then(() => dispatch({ type: ADD_PLUS_SUCCESS, payload: { id, authorId } }))
    .catch((err) => dispatch({ type: ADD_PLUS_FAILURE, err }));
};

export const addMinus = (id, authorId, minus) => (dispatch, getState) => {
  dispatch({ type: ADD_MINUS_RESPOND });

  const isUserVoted = getState()
    .posts.allposts.find((post) => post.id === id)
    .usersVotedId.includes(authorId);

  if (isUserVoted) return dispatch({ type: ADD_MINUS_FAILURE });

  const newData = {
    minus: minus + 1,
    usersVotedId: firebase.firestore.FieldValue.arrayUnion(`${authorId}`),
  };

  db.collection('posts')
    .doc(`${id}`)
    .update(newData)
    .then(() => dispatch({ type: ADD_MINUS_SUCCESS, payload: { id, authorId } }))
    .catch(() => dispatch({ type: ADD_MINUS_FAILURE }));
};
