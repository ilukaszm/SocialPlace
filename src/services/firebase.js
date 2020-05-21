import * as firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAmzQgdHMBgKohpN9me-YtRP2o3mHlrvKo',
  authDomain: 'socialapp-edc89.firebaseapp.com',
  databaseURL: 'https://socialapp-edc89.firebaseio.com',
  projectId: 'socialapp-edc89',
  storageBucket: 'socialapp-edc89.appspot.com',
  messagingSenderId: '922046472982',
  appId: '1:922046472982:web:e90caed6fa3b0c2abfe637',
  measurementId: 'G-11T97KFZRP',
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export const googleAuth = () => {
  firebase.auth().signInWithPopup(googleProvider);
};
export const fbAuth = () => {
  firebase.auth().signInWithPopup(fbProvider);
};

export const { auth } = firebase;
