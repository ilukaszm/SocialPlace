import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import avatar from '../../../assets/avatar.svg';
import StatsPost from '../StatsPost/StatsPost';

const AvatarAccount = styled.div`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-image: url(${avatar});
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

const Comment = () => {
  return (
    <StyledWrapper>
      <AvatarAccount />
      <InnerWrapper>
        <StyledParagraph>Lorem ipsum dolor sit amet</StyledParagraph>
        <Button>comments</Button>
      </InnerWrapper>
      <StatsPost />
    </StyledWrapper>
  );
};

export default Comment;
