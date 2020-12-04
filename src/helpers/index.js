import { auth } from '../services/firebase';
import { usersRef, postsRef, commentsRef } from '../services/db';

export const createUserByIntegrate = async (user, platform) => {
  const { uid } = await auth().currentUser;
  const checkUser = await usersRef.doc(uid).get();

  if (!checkUser.exists) {
    const userData = {};

    if (platform === 'google') {
      const { email, picture: avatarURL } = user.additionalUserInfo.profile;

      userData.email = email;
      userData.avatarURL = avatarURL;
    } else {
      const {
        email,
        picture: {
          data: { url: avatarURL },
        },
      } = user.additionalUserInfo.profile;

      userData.email = email;
      userData.avatarURL = avatarURL;
    }

    try {
      await usersRef.doc(uid).set({ ...userData });
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export const getOnePost = async (id) => {
  try {
    const post = postsRef.doc(id).get();
    if (post) {
      return post;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPostComments = async (id) => {
  try {
    const comments = commentsRef.where('postId', '==', id).get();
    if (comments) {
      return comments;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
