import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import StatsPost from '../StatsPost/StatsPost';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';

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
  margin: 20px 0;
  animation: appear 0.3s ease-in-out;

  @keyframes appear {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  margin-top: 4px;
  color: ${({ theme }) => theme.darkBlue};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.light}};
`;

const Post = ({
  id,
  email,
  avatarURL,
  subject,
  description,
  plus,
  minus,
  className,
  withoutButton,
  votersId,
}) => {
  return (
    <StyledWrapper className={className}>
      <AvatarAccount avatarURL={avatarURL} />
      <InnerWrapper>
        <Heading small>{subject}</Heading>
        <StyledParagraphAuthor>Author: {email}</StyledParagraphAuthor>
        <StyledParagraph>{description}</StyledParagraph>
        {withoutButton === false && (
          <ButtonLink to={`/post/${id}`} as={Link}>
            show comments
          </ButtonLink>
        )}
      </InnerWrapper>
      <StatsPost id={id} plus={plus} minus={minus} votersId={votersId} />
    </StyledWrapper>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  plus: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
  withoutButton: PropTypes.bool,
  votersId: PropTypes.array.isRequired,
  className: PropTypes.string,
};

Post.defaultProps = {
  className: '',
  withoutButton: false,
};

export default Post;
