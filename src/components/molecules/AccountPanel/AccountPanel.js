import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import settings from '../../../assets/icons/settings.svg';
import logout from '../../../assets/icons/logout.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { useAuthContext } from '../../../context/auth';

const AccountPanelWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const AvatarAccount = styled.div`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-image: url(${({ avatarURL }) => avatarURL});
  background-position: center;
  background-size: cover;
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledParagraph = styled.p`
  display: block;
  text-align: right;
  width: 100%;
`;

const AccountPanel = () => {
  const history = useHistory();
  const currentUser = useAuthContext();

  return (
    <AccountPanelWrapper>
      <AccountWrapper>
        <ButtonIcon icon={settings} />
        <ButtonIcon
          icon={logout}
          onClick={async () => {
            await auth().signOut();
            history.push('/login');
          }}
        />
        <AvatarAccount avatarURL={currentUser.photoURL} />
      </AccountWrapper>
      <StyledParagraph>{currentUser.email}</StyledParagraph>
    </AccountPanelWrapper>
  );
};

export default AccountPanel;
