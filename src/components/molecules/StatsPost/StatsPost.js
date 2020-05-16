import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import smallMinus from '../../../assets/icons/smallMinus.svg';
import smallPlus from '../../../assets/icons/smallPlus.svg';

const StatsPostWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  justify-items: center;
  align-items: center;
`;

const StatsPost = ({ plus, minus }) => {
  return (
    <StatsPostWrapper>
      <ButtonIcon icon={smallPlus} />
      <Paragraph>{plus}</Paragraph>
      <ButtonIcon icon={smallMinus} />
      <Paragraph>{minus}</Paragraph>
    </StatsPostWrapper>
  );
};

StatsPost.propTypes = {
  plus: PropTypes.string.isRequired,
  minus: PropTypes.string.isRequired,
};

export default StatsPost;
