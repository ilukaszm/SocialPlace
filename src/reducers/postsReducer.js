import {
  ADD_POST,
  ADD_PLUS_SUCCESS,
  ADD_MINUS_SUCCESS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_ALL_POSTS_SUCCESS,
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
      return { ...state, allposts: [...payload] };

    case ADD_POST:
      return {
        ...state,
        userposts: [...state.userposts, { ...payload, plus: 0, minus: 0 }],
        allposts: [...state.allposts, { ...payload, plus: 0, minus: 0 }],
      };

    case ADD_PLUS_SUCCESS:
      return {
        ...state,
        allposts: state.allposts.map((post) => {
          if (post.id === payload.id) {
            return { ...post, plus: post.plus + 1 };
          }
          return post;
        }),
      };

    case ADD_MINUS_SUCCESS:
      return [
        ...state.map((post) => {
          if (post.id === payload.id) {
            return { ...post, minus: post.minus - 1 };
          }
          return post;
        }),
      ];

    default:
      return state;
  }
};

export default postsReducer;
