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

const Comment = ({ avatarURL, content }) => {
  return (
    <StyledWrapper>
      <AvatarAccount avatarURL={avatarURL} />
      <InnerWrapper>
        <StyledParagraph>{content}</StyledParagraph>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Comment.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
