import { db } from './firebase';

export const usersRef = db.collection('users');
export const postsRef = db.collection('posts');
