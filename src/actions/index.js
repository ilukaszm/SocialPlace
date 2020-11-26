import { fieldValue } from '../services/firebase';
import { postsRef, usersRef, commentsRef } from '../services/db';
import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_FAILURE,
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

let latestUserPostsDoc = null;
let latestAllPostsDoc = null;

export const fetchUserPosts = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_POSTS_REQUEST });
  const tmp = [];

  const result = await postsRef
    .where('authorId', '==', userId)
    .orderBy('createdAt', 'asc')
    .startAfter(latestUserPostsDoc || 0)
    .limit(5)
    .get();

  if (!result.empty) {
    result.docs.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });

    dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: tmp });
    latestUserPostsDoc = result.docs[result.docs.length - 1];
  } else {
    dispatch({ type: FETCH_USER_POSTS_FAILURE });
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS_REQUEST });
  const tmp = [];

  const result = await postsRef
    .orderBy('createdAt', 'asc')
    .startAfter(latestAllPostsDoc || 0)
    .limit(5)
    .get();

  if (!result.empty) {
    result.docs.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });

    dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: tmp });

    latestAllPostsDoc = result.docs[result.docs.length - 1];
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

export const addComment = (newComment) => async (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST });

  try {
    const result = await commentsRef.add(newComment);

    if (result) {
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: { id: result.id, ...newComment } });
    }
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAILURE });

    throw new Error(error.message);
  }
};

export const fetchPostComments = (postId) => async (dispatch) => {
  dispatch({ type: FETCH_POST_COMMENTS_REQUEST });
  const tmp = [];

  try {
    const result = await commentsRef.where('postId', '==', postId).get();

    if (result) {
      result.docs.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });

      dispatch({ type: FETCH_POST_COMMENTS_SUCCESS, payload: tmp });
    }
  } catch (error) {
    dispatch({ type: FETCH_POST_COMMENTS_FAILURE });

    throw new Error(error.message);
  }
};

export const addPlus = (id, authorId, plus, avatarURL, email) => async (dispatch, getState) => {
  dispatch({ type: ADD_PLUS_REQUEST });

  const isVoterAlready = await getState()
    .posts.allposts.find((post) => post.id === id)
    .votersId.find((voter) => voter.authorId === authorId);

  if (isVoterAlready) return dispatch({ type: ADD_PLUS_FAILURE });

  const newData = {
    plus: plus + 1,
    votersId: fieldValue.arrayUnion({
      authorId,
      avatarURL,
      email,
    }),
  };

  try {
    await postsRef.doc(id).update(newData);

    dispatch({ type: ADD_PLUS_SUCCESS, payload: { id, data: { authorId, avatarURL, email } } });
  } catch (error) {
    dispatch({ type: ADD_PLUS_FAILURE });

    throw new Error(error.message);
  }
};

export const addMinus = (id, authorId, minus, avatarURL, email) => async (dispatch, getState) => {
  dispatch({ type: ADD_MINUS_REQUEST });

  const isVoterAlready = getState()
    .posts.allposts.find((post) => post.id === id)
    .votersId.find((voter) => voter.authorId === authorId);

  if (isVoterAlready) return dispatch({ type: ADD_MINUS_FAILURE });

  const newData = {
    minus: minus + 1,
    votersId: fieldValue.arrayUnion({ authorId, avatarURL, email }),
  };

  try {
    await postsRef.doc(id).update(newData);

    dispatch({ type: ADD_MINUS_SUCCESS, payload: { id, data: { authorId, avatarURL, email } } });
  } catch (error) {
    dispatch({ type: ADD_MINUS_FAILURE });

    throw new Error(error.message);
  }
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

export const updateUserProfile = (userId, avatarURL) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

  try {
    await usersRef.doc(userId).update({ avatarURL });

    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: avatarURL });
  } catch (error) {
    dispatch({ type: UPDATE_USER_PROFILE_FAILURE });

    throw new Error(error.message);
  }
};
