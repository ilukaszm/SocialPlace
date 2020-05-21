import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { auth } from '../../../services/firebase';
import settings from '../../../assets/icons/settings.svg';
import logout from '../../../assets/icons/logout.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

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
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <AccountPanelWrapper>
      <AccountWrapper>
        <ButtonIcon icon={settings} />
        <ButtonIcon
          icon={logout}
          onClick={() => {
            auth().signOut();
          }}
        />
        <AvatarAccount avatarURL={currentUser.avatarURL} />
      </AccountWrapper>
      <StyledParagraph>{currentUser.email}</StyledParagraph>
    </AccountPanelWrapper>
  );
};

export default AccountPanel;
