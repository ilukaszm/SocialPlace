import { useEffect } from 'react';
import { auth } from '../services/firebase';

export default () => {
  const currentUser = JSON.parse(localStorage.getItem('authUser'));

  useEffect(() => {
    const setUser = (user) => {
      if (user) {
        localStorage.setItem('authUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('authUser');
      }
    };
    const unsubsribe = auth().onAuthStateChanged(setUser);

    return () => unsubsribe();
  }, []);

  return currentUser;
};
