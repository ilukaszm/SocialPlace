export const ADD_POST = 'ADD_POST';

export const ADD_PLUS = 'ADD_PLUS';
export const ADD_MINUS = 'ADD_MINUS';

export const SET_USER_IS_SIGNED_IN = 'SET_USER_IS_SIGNED_IN';
export const SET_USER_IS_SIGNED_OUT = 'SET_USER_IS_SIGNED_OUT';

export const login = (payload) => ({
  type: SET_USER_IS_SIGNED_IN,
  payload,
});

export const logout = () => ({
  type: SET_USER_IS_SIGNED_OUT,
});

export const addPost = (id, avatarURL, title, content) => ({
  type: ADD_POST,
  payload: { id, avatarURL, title, content },
});

export const addPlus = (id) => {
  return {
    type: ADD_PLUS,
    payload: { id },
  };
};

export const addMinus = (id) => ({
  type: ADD_MINUS,
  payload: { id },
});
