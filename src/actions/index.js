import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { postsRef, usersRef } from '../services/db';

import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_PLUS_REQUEST,
  ADD_PLUS_SUCCESS,
  ADD_PLUS_FAILURE,
  ADD_MINUS_REQUEST,
  ADD_MINUS_SUCCESS,
  ADD_MINUS_FAILURE,
} from './types';

export const fetchUserPosts = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_POSTS_REQUEST });
  const tmp = [];

  const result = await postsRef.where('authorId', '==', userId).get();

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
  dispatch({ type: FETCH_ALL_POSTS_REQUEST });
  const tmp = [];

  const result = await postsRef.get();

  if (result) {
    result.docs.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: tmp });
  } else {
    dispatch({ type: FETCH_ALL_POSTS_FAILURE });
  }
};

export const addPost = (post) => async (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST });

  try {
    const result = await postsRef.add(post);

    if (result) {
      dispatch({ type: ADD_POST_SUCCESS, payload: { id: result.id, ...post } });
    }
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE });
    throw new Error(error.message);
  }
};

export const addComment = (id, newComment) => async (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST });

  try {
    await postsRef.doc(id).update(newComment);
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: { id, ...newComment } });
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAILURE });
    throw new Error(error.message);
  }
};

export const addPlus = (id, authorId, plus) => (dispatch, getState) => {
  dispatch({ type: ADD_PLUS_REQUEST });

  const isUserVoted = getState()
    .posts.allposts.find((post) => post.id === id)
    .usersVotedId.includes(authorId);

  if (isUserVoted) return dispatch({ type: ADD_PLUS_FAILURE });

  const newData = {
    plus: plus + 1,
    usersVotedId: firebase.firestore.FieldValue.arrayUnion(authorId),
  };

  postsRef
    .doc(id)
    .update(newData)
    .then(() => dispatch({ type: ADD_PLUS_SUCCESS, payload: { id, authorId } }))
    .catch((err) => dispatch({ type: ADD_PLUS_FAILURE, err }));
};

export const addMinus = (id, authorId, minus) => (dispatch, getState) => {
  dispatch({ type: ADD_MINUS_REQUEST });

  const isUserVoted = getState()
    .posts.allposts.find((post) => post.id === id)
    .usersVotedId.includes(authorId);

  if (isUserVoted) return dispatch({ type: ADD_MINUS_FAILURE });

  const newData = {
    minus: minus + 1,
    usersVotedId: firebase.firestore.FieldValue.arrayUnion(authorId),
  };

  postsRef
    .doc(id)
    .update(newData)
    .then(() => dispatch({ type: ADD_MINUS_SUCCESS, payload: { id, authorId } }))
    .catch(() => dispatch({ type: ADD_MINUS_FAILURE }));
};

export const fetchUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_PROFILE_REQUEST });

  try {
    const user = await usersRef.doc(userId).get();

    if (user) {
      dispatch({
        type: FETCH_USER_PROFILE_SUCCESS,
        payload: { ...user.data() },
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_USER_PROFILE_FAILURE });
    throw new Error(error.message);
  }
};
