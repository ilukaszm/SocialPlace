import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addPlus, addMinus } from '../../../actions';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Avatar from '../../atoms/Avatar/Avatar';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import smallMinus from '../../../assets/icons/smallMinus.svg';
import smallPlus from '../../../assets/icons/smallPlus.svg';
import { useAuthContext } from '../../../context/AuthContext';
import { selectProfile } from '../../../selectors';

const StatsPostWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  justify-items: center;
  align-items: center;
  position: relative;
`;

const StyledAvatarsWindow = styled.div`
  padding: 10px;
  position: absolute;
  left: 90%;
  width: 250px;
  overflow: auto;
  border-radius: 10px;
  background-color: rgba(215, 34, 71, 0.8);
  opacity: 0.8;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: conter;
  align-items: center;
  display: none;

  @media (min-width: 1024px) {
    display: ${({ isDisplay }) => (isDisplay ? 'grid' : 'none')};
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: white;
`;

const StatsPost = ({ id, plus, minus, votersId }) => {
  const [showVoters, setShowVoters] = useState(false);

  const dispatch = useDispatch();
  const { avatarURL, email } = useSelector(selectProfile);
  const { userId } = useAuthContext();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener('mouseover', () => setShowVoters(true));
    ref.current.addEventListener('mouseout', () => setShowVoters(false));
  }, []);

  return (
    <StatsPostWrapper ref={ref}>
      <ButtonIcon
        name="plus"
        onClick={() => dispatch(addPlus(id, userId, plus, avatarURL, email))}
        icon={smallPlus}
      />
      <Paragraph>{plus}</Paragraph>
      <ButtonIcon
        onClick={() => dispatch(addMinus(id, userId, minus, avatarURL, email))}
        icon={smallMinus}
      />
      <StyledAvatarsWindow isDisplay={showVoters}>
        <StyledParagraph>Voters:</StyledParagraph>
        {votersId.map(({ avatarURL, authorId }) => (
          <>
            <Avatar key={authorId} avatarURL={avatarURL} />
          </>
        ))}
      </StyledAvatarsWindow>
      <Paragraph>{minus}</Paragraph>
    </StatsPostWrapper>
  );
};

StatsPost.propTypes = {
  id: PropTypes.string.isRequired,
  plus: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
  votersId: PropTypes.array.isRequired,
};

export default StatsPost;
