import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

const StyledForm = styled.form`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-left: 10px solid ${({ theme }) => theme.red};

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 40%;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 50px 0;
`;

const StyledInput = styled(Input)`
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
`;

const StyledTextArea = styled(StyledInput)`
  border-radius: 10px;
  height: 300px;
`;

const Form = () => {
  return (
    <StyledForm>
      <StyledHeading small>add new post</StyledHeading>
      <StyledInput placeholder="title" />
      <StyledTextArea as="textarea" placeholder="description" />
      <Button>add</Button>
    </StyledForm>
  );
};

export default Form;
