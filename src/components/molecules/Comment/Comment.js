import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const AvatarAccount = styled.div`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-image: url(${({ avatarURL }) => avatarURL});
  background-size: cover;
  background-position: center;
`;

const StyledWrapper = styled.div`
  padding-left: 50px;
  margin-bottom: 20px;
  display: flex;
  animation: appear 0.3s ease-in-out;
`;

const InnerWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  width: 70%;
  flex-direction: column;
`;
const StyledParagraph = styled(Paragraph)`
  margin: 10px 0;
`;

const StyledParagraphAuthor = styled(Paragraph)`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.light};
`;

const Comment = ({ avatarURL, description, email }) => {
  return (
    <StyledWrapper>
      <AvatarAccount avatarURL={avatarURL} />
      <InnerWrapper>
        <StyledParagraphAuthor>{email}</StyledParagraphAuthor>
        <StyledParagraph>{description}</StyledParagraph>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Comment.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
