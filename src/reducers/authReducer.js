import { SET_USER_IS_SIGNED_IN, SET_USER_IS_SIGNED_OUT } from '../actions';

const initialState = {
  synced: false,
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_IS_SIGNED_IN:
      return {
        synced: true,
        user: payload,
      };

    case SET_USER_IS_SIGNED_OUT:
      return { user: null };

    default:
      return state;
  }
};

export default authReducer;
