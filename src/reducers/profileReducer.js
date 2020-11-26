import { FETCH_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_SUCCESS } from '../actions/types';

const initialState = {
  userId: '',
  email: '',
  avatarURL: '',
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, ...payload };

    case UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, avatarURL: payload };

    default:
      return state;
  }
};

export default profileReducer;
