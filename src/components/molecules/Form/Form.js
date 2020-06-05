import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
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
  transition: 0.3s ease-in;
  transform: translateX(${({ visibility }) => (visibility ? '0' : '100%')});

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

const Form = ({ visibility, submitFn, comment }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => submitFn(data);

  return (
    <StyledForm visibility={visibility} onSubmit={handleSubmit(onSubmit)}>
      <StyledHeading small>add new {comment ? 'comment' : 'post'}</StyledHeading>
      {!comment && <StyledInput name="title" placeholder="title" ref={register()} />}
      <StyledTextArea as="textarea" name="content" placeholder="description" ref={register} />
      <Button type="submit">add</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  visibility: PropTypes.bool,
  comment: PropTypes.bool,
  submitFn: PropTypes.func.isRequired,
};

Form.defaultProps = {
  visibility: false,
  comment: false,
};

export default Form;
