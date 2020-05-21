import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import StatsPost from '../StatsPost/StatsPost';

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
  display: flex;
  margin-bottom: 20px;
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

const Post = ({ id, avatarURL, title, content, plus, minus }) => {
  return (
    <StyledWrapper>
      <AvatarAccount avatarURL={avatarURL} />
      <InnerWrapper>
        <Heading small>{title}</Heading>
        <StyledParagraph>{content}</StyledParagraph>
        <Button>comments</Button>
      </InnerWrapper>
      <StatsPost id={id} plus={plus} minus={minus} />
    </StyledWrapper>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  plus: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
};

export default Post;
