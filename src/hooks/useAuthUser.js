import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../services/firebase';
import { login, logout } from '../actions';

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    const setUser = (user) => {
      if (user) {
        dispatch(login({ id: user.uid, email: user.email, avatarURL: user.photoURL }));
      } else {
        dispatch(logout());
      }
    };
    const unsubsribe = auth().onAuthStateChanged(setUser);

    return () => unsubsribe();
  }, [dispatch]);

  return currentUser;
};
