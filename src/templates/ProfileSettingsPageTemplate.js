import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProfile } from '../selectors';
import logo from '../assets/logoSmall.svg';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Avatar from '../components/atoms/Avatar/Avatar';
import ButtonLink from '../components/atoms/ButtonLink/ButtonLink';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 28px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const ProfileSettingsPageTemplate = ({ handleFireBaseUpload, handleImageAsFile }) => {
  const { avatarURL } = useSelector(selectProfile);

  return (
    <StyledWrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <StyledHeading>Profile settings</StyledHeading>
      <StyledForm onSubmit={handleFireBaseUpload}>
        <Paragraph>Your avatar:</Paragraph>
        <Avatar avatarURL={avatarURL} />
        <input type="file" accept="image/png, image/jpeg" onChange={handleImageAsFile} />
        <StyledButton>Upload</StyledButton>
        <ButtonLink to="/" as={Link}>
          Back to home page
        </ButtonLink>
      </StyledForm>
    </StyledWrapper>
  );
};

ProfileSettingsPageTemplate.propTypes = {
  handleFireBaseUpload: PropTypes.func.isRequired,
  handleImageAsFile: PropTypes.func.isRequired,
};

export default ProfileSettingsPageTemplate;
