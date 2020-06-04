import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addPlus, addMinus } from '../../../actions';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import smallMinus from '../../../assets/icons/smallMinus.svg';
import smallPlus from '../../../assets/icons/smallPlus.svg';
import { useAuthContext } from '../../../context/auth';

const StatsPostWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  justify-items: center;
  align-items: center;
`;

const StatsPost = ({ id, plus, minus }) => {
  const dispatch = useDispatch();
  const currentUser = useAuthContext();

  return (
    <StatsPostWrapper>
      <ButtonIcon
        name="plus"
        onClick={() => dispatch(addPlus(id, currentUser.uid, plus))}
        icon={smallPlus}
      />
      <Paragraph>{plus}</Paragraph>
      <ButtonIcon
        onClick={() => dispatch(addMinus(id, currentUser.uid, minus))}
        icon={smallMinus}
      />
      <Paragraph>{minus}</Paragraph>
    </StatsPostWrapper>
  );
};

StatsPost.propTypes = {
  id: PropTypes.string.isRequired,
  plus: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
};

export default StatsPost;
