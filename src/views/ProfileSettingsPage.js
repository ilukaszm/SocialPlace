import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storage } from '../services/firebase';
import ProfileSettingsPageTemplate from '../templates/ProfileSettingsPageTemplate';
import { useAuthContext } from '../context/AuthContext';
import { updateUserProfile } from '../actions';

const ProfileSettingsPage = () => {
  const { userId } = useAuthContext();
  const dispatch = useDispatch();

  const [imageAsFile, setImageAsFile] = useState(null);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    if (image) {
      setImageAsFile(image);
    }
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    const uploadAvatar = async () => {
      let uploadAvatar;
      if (imageAsFile) {
        uploadAvatar = await storage.ref(`/avatars/${userId}`).put(imageAsFile);
        if (uploadAvatar) {
          const getAvatarURL = async () => {
            const avatarURL = await storage.ref('avatars').child(userId).getDownloadURL();
            if (avatarURL) {
              dispatch(updateUserProfile(userId, avatarURL));
            }
          };
          getAvatarURL();
        }
      }
    };
    uploadAvatar();
  };

  return (
    <ProfileSettingsPageTemplate
      handleFireBaseUpload={handleFireBaseUpload}
      handleImageAsFile={handleImageAsFile}
    />
  );
};

export default ProfileSettingsPage;
