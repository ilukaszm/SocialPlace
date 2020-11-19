import {
  ADD_COMMENT_SUCCESS,
  ADD_PLUS_SUCCESS,
  ADD_MINUS_SUCCESS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_ALL_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
} from '../actions/types';

const initialState = {
  userposts: [],
  allposts: [],
  hottestposts: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_POSTS_SUCCESS:
      return { ...state, userposts: [...payload] };

    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allposts: [...payload],
        hottestposts: [...payload].filter((post) => post.plus > 10),
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        userposts: [...state.userposts, { ...payload }],
        allposts: [...state.allposts, { ...payload }],
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        userposts: [
          ...state.userposts.map((userpost) => {
            if (userpost.id === payload.id) {
              return { ...userpost, comments: [...userpost.comments, { ...payload }] };
            }
            return userpost;
          }),
        ],
        allposts: [
          ...state.allposts.map((post) => {
            if (post.id === payload.id) {
              return { ...post, comments: [...post.comments, { ...payload }] };
            }
            return post;
          }),
        ],
      };

    case ADD_PLUS_SUCCESS:
      return {
        ...state,
        allposts: state.allposts.map((post) => {
          if (post.id === payload.id) {
            return {
              ...post,
              plus: post.plus + 1,
              usersVotedId: [...post.usersVotedId, payload.authorId],
            };
          }
          return post;
        }),
      };

    case ADD_MINUS_SUCCESS:
      return {
        ...state,
        allposts: state.allposts.map((post) => {
          if (post.id === payload.id) {
            return {
              ...post,
              minus: post.minus + 1,
              usersVotedId: [...post.usersVotedId, payload.authorId],
            };
          }
          return post;
        }),
      };

    default:
      return state;
  }
};

export default postsReducer;
