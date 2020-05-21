import { ADD_POST, ADD_PLUS, ADD_MINUS } from '../actions';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [...state, { ...payload, plus: 0, minus: 0 }];

    case ADD_PLUS:
      return [
        ...state.map((post) => {
          if (post.id === payload.id) {
            return { ...post, plus: post.plus + 1 };
          }
          return post;
        }),
      ];

    case ADD_MINUS:
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
