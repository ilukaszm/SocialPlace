import React from 'react';
import styled from 'styled-components';
import Post from '../components/molecules/Post/Post';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import logo from '../assets/LogoSmall.svg';
import plus from '../assets/icons/plus.svg';

const PostPageTemplateWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background-size: 50%;

  :hover {
    background-color: ${({ theme }) => theme.darkRed};
  }

  @media (min-width: 768px) {
    bottom: 30px;
    right: 30px;
    width: 62px;
    height: 62px;
  }
`;

const PostPageTemplate = () => {
  return (
    <PostPageTemplateWrapper>
      <img src={logo} alt="logo" />
      <Post />
      <StyledButtonIcon icon={plus} second />
    </PostPageTemplateWrapper>
  );
};

export default PostPageTemplate;
