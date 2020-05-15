import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import avatar from '../../../assets/avatar.svg';

const AvatarAccount = styled.div`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-image: url(${avatar});
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

const Post = () => {
  return (
    <StyledWrapper>
      <AvatarAccount />
      <InnerWrapper>
        <Heading small>title</Heading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas id aliquam earum
          voluptatibus illo eligendi eum enim sed error?
        </StyledParagraph>
        <Button>comments</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Post;
