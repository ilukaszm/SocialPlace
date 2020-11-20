import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  profile: profileReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
