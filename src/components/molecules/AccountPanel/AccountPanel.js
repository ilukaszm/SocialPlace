import React from 'react';
import styled from 'styled-components';
import avatar from '../../../assets/avatar.svg';
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
  background-image: url(${avatar});
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
  return (
    <AccountPanelWrapper>
      <AccountWrapper>
        <ButtonIcon icon={settings} />
        <ButtonIcon icon={logout} />
        <AvatarAccount />
      </AccountWrapper>
      <StyledParagraph>Łukasz Michalak</StyledParagraph>
    </AccountPanelWrapper>
  );
};

export default AccountPanel;
