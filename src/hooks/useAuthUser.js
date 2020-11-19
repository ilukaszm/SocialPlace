import { useEffect, useState } from 'react';
import { auth } from '../services/firebase';

export default () => {
  const authUser = JSON.parse(localStorage.getItem('authUserId'));
  const [currentUser, setCurrentUser] = useState({ userId: authUser || null });

  useEffect(() => {
    const setUser = (user) => {
      if (user) {
        localStorage.setItem('authUserId', JSON.stringify(user.uid));
        setCurrentUser({ userId: user.uid });
      } else {
        localStorage.removeItem('authUserId');
      }
    };
    const unsubsribe = auth().onAuthStateChanged(setUser);

    return () => unsubsribe();
  }, []);

  return currentUser;
};
