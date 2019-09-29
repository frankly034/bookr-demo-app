import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = ({
  onSubmit,
  onChange,
  inputFields,
  buttonTitle,
  formTitle,
  margin
}) => (
  <Form.Container onSubmit={onSubmit}>
    <h3>{formTitle}</h3>
    { inputFields
        .map((field, key) => (
          <Input
            {...field}
            onChange={onChange}
            key={key}
            margin='0.5rem 0'
          />
        ))
    }
    <Button title={buttonTitle} margin='0.5rem 0'/>
  </Form.Container>
);

Form.Container = styled.form`
  margin: 0.5rem;
`;

export default Form;
