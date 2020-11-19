import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import postsReducer from './postsReducer';

export default combineReducers({ profile: profileReducer, posts: postsReducer });
