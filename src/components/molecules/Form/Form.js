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
  transform: translateX(${({ isVisibility }) => (isVisibility ? '0' : '100%')});

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

const StyledError = styled.p`
  color: ${({ theme }) => theme.darkRed};
  margin-top: 8px;
`;

const ErrorWrapper = styled.div`
  min-height: 58px;
`;

const Form = ({ isVisibility, submitFn, comment }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    submitFn(data);
    e.target.reset();
  };

  return (
    <StyledForm isVisibility={isVisibility} onSubmit={handleSubmit(onSubmit)}>
      <StyledHeading small>add new {comment ? 'comment' : 'post'}</StyledHeading>
      <ErrorWrapper>
        <StyledError>{errors?.subject?.message}</StyledError>
        <StyledError>{errors?.description?.message}</StyledError>
      </ErrorWrapper>
      {!comment && (
        <StyledInput
          name="subject"
          type="text"
          id="subject"
          placeholder="subject"
          ref={register({
            required: { value: true, message: 'Subject field is required!' },
            maxLength: { value: 80, message: 'Subject field has to max 80 characters!' },
            minLength: { value: 10, message: 'Subject field has to min 10 characters!' },
          })}
        />
      )}
      <StyledTextArea
        as="textarea"
        type="text"
        name="description"
        id="description"
        placeholder="description"
        ref={register({
          required: { value: true, message: 'Description field is required!' },
          maxLength: { value: 400, message: 'Subject field has to max 400 characters!' },
          minLength: { value: 10, message: 'Subject field has to min 10 characters!' },
        })}
      />
      <Button type="submit">add</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  isVisibility: PropTypes.bool,
  comment: PropTypes.bool,
  submitFn: PropTypes.func.isRequired,
};

Form.defaultProps = {
  isVisibility: false,
  comment: false,
};

export default Form;
