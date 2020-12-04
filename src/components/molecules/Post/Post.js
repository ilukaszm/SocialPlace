import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import StatsPost from '../StatsPost/StatsPost';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';
import { useAuthContext } from '../../../context/AuthContext';
import { deletePost } from '../../../actions';
import ButtonDelete from '../../atoms/ButtonDelete';

const AvatarAccount = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-image: url(${({ avatarURL }) => avatarURL});
  background-size: cover;
  background-position: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  margin: 10px 28px;

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
  width: 78%;
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

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  font-size: 16px;
`;

const Post = ({
  id,
  email,
  authorId,
  avatarURL,
  subject,
  description,
  plus,
  minus,
  className,
  withoutButton,
  votersId,
}) => {
  const { userId } = useAuthContext();
  const dispatch = useDispatch();

  return (
    <StyledWrapper className={className}>
      <AccountWrapper>
        <AvatarAccount avatarURL={avatarURL} />
        {authorId === userId && (
          <ButtonDelete type="button" onClick={() => dispatch(deletePost(id))} />
        )}
      </AccountWrapper>
      <InnerWrapper>
        <StyledHeading small>{subject}</StyledHeading>
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
  authorId: PropTypes.string.isRequired,
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
