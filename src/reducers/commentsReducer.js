import { ADD_COMMENT_SUCCESS, FETCH_POST_COMMENTS_SUCCESS } from '../actions/types';

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COMMENT_SUCCESS:
      return [...state, { ...payload }];

    case FETCH_POST_COMMENTS_SUCCESS:
      return [...payload];

    default:
      return state;
  }
};

export default commentsReducer;
